<?php
/**
 * Plugin Name: Tutor LMS Customized
 * Description: This plugin is a customized version of Tutor LMS.
 * Author: Golden
 * Author URI: https://www.linkido.com
 * Version: 1.0.0
 * @package Tutor_Customized
 */

define( 'TUTOR_CUSTOMIZED_VERSION', '1.0.0' );
define( 'TUTOR_CUSTOMIZED_FILE', __FILE__ );

add_action( 'admin_enqueue_scripts', function() {
    if ( isset( $_GET['page'] ) && $_GET['page'] === "tutor-instructors" ) {
        wp_enqueue_script( 'set_linkido', tutor()->url . 'assets/js/customized/admin/set_linkido.js', array( 'jquery' ), TUTOR_CUSTOMIZED_VERSION, true );
    }
} );

add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_script( 'calc-price', tutor()->url . 'assets/js/customized/calc-price.js', array( 'jquery' ), TUTOR_CUSTOMIZED_VERSION, true );
} );

add_action( 'tutor_edit_instructor_form_fields_after', function( $instructor_id ) {
	$status   = get_user_meta( $instructor_id, '_tutor_instructor_status', true );
	$linkido_percentage = get_user_meta( $instructor_id, 'linkido_percentage', true );


    if ( $status === "approved" ) {
        ?>
        <div class="tutor-rows">
            <div class="tutor-col">
                <label class="tutor-form-label">
                    <?php esc_html_e( 'Linkido', 'tutor-pro' ); ?>
                </label>
                <div class="tutor-mb-16">
                    <input
                        value="<?php echo esc_attr( $linkido_percentage ); ?>" 
                        type="text" id="show_linkido_percentage_<?php echo $instructor_id; ?>" oninput="handle_change_linkido( <?php echo $instructor_id ?> )" class="tutor-form-control tutor-mb-12" placeholder="<?php esc_attr_e( 'Enter Linkido', 'tutor-pro' ); ?>"/>
                </div>
                <div class="tutor-mb-16">
                    <input value="" type="hidden" id="hidden_linkido_percentage_<?php echo $instructor_id ?>" name="linkido_percentage"/>
                </div>
            </div>
        </div>
        <?php
    }
}, 11);

add_action( 'wp_ajax_tutor_update_instructor_data', function() {
    $linkido_percentage = \TUTOR\Input::post( 'linkido_percentage', '');
    $user_id            = \TUTOR\Input::post( 'user_id' );

    if ( $linkido_percentage && is_numeric( $linkido_percentage ) ) {
        update_user_meta( $user_id, 'linkido_percentage', $linkido_percentage );
        $net_rate = get_user_meta( $user_id, 'net_rate', true );
        if ( $net_rate ) {
            $end_price = $net_rate + $net_rate * $linkido_percentage / 100;
            update_user_meta( $user_id, 'end_price', $end_price );
        }
    } elseif ( $linkido_percentage === "" || (int) $linkido_percentage === 0) {
        delete_user_meta( $user_id, 'linkido_percentage');
        $net_rate = get_user_meta( $user_id, 'net_rate', true );
        if ( $net_rate ) {
            $end_price = $net_rate;
            update_user_meta( $user_id, 'end_price', $end_price );
        } else {
            delete_user_meta( $user_id, 'end_price');
        }
    }
} );

add_filter( 'tutor/user/profile/completion', function($required_fields) {
    $required_fields['net_rate'] = __( 'Set Your Net Rate', 'tutor' );

    $settings_url = tutor_utils()->tutor_dashboard_url( 'settings' );
    $user_id = get_current_user_id();

    $required_fields[ 'net_rate' ] = array(
        'text'   => __( 'Set Your Net Rate', 'tutor' ),
        'is_set' => get_user_meta( $user_id, 'net_rate', true ) ? true : false,
        'url'    => $settings_url,
    );

    return $required_fields;
} );

add_action( 'tutor_profile_edit_input_after', function($user) {
    $public_display                     = array();
    $public_display['display_nickname'] = $user->nickname;
    $public_display['display_username'] = $user->user_login;

    if ( ! empty( $user->first_name ) ) {
        $public_display['display_firstname'] = $user->first_name;
    }

    if ( ! empty( $user->last_name ) ) {
        $public_display['display_lastname'] = $user->last_name;
    }

    if ( ! empty( $user->first_name ) && ! empty( $user->last_name ) ) {
        $public_display['display_firstlast'] = $user->first_name . ' ' . $user->last_name;
        $public_display['display_lastfirst'] = $user->last_name . ' ' . $user->first_name;
    }

    if ( ! in_array( $user->display_name, $public_display ) ) { // Only add this if it isn't duplicated elsewhere.
        $public_display = array( 'display_displayname' => $user->display_name ) + $public_display;
    }

    $public_display = array_map( 'trim', $public_display );
    $public_display = array_unique( $public_display );
    ?>
    <div class="tutor-row">
        <div class="tutor-col-12 tutor-col-sm-4 tutor-col-md-12 tutor-col-lg-4 tutor-mb-32">
            <label class="tutor-form-label tutor-color-secondary">
                <?php esc_html_e( 'NET rate', 'tutor' ); ?>
            </label>
            <input class="tutor-form-control" type="text" name="net_rate" id="net_rate" value="<?php echo esc_attr( get_user_meta( $user->ID, 'net_rate', true ) ); ?>" placeholder="<?php esc_attr_e( 'NET RATE', 'tutor' ); ?>">
        </div>

        <div class="tutor-col-12 tutor-col-sm-4 tutor-col-md-12 tutor-col-lg-4 tutor-mb-32">
            <label class="tutor-form-label tutor-color-secondary">
                <?php esc_html_e( 'Linkido', 'tutor' ); ?>
            </label>
            <input readonly class="tutor-form-control" type="text" name="linkido_percentage" id="linkido_percentage" value="<?php echo esc_attr( get_user_meta( $user->ID, 'linkido_percentage', true ) ); ?>" placeholder="<?php esc_attr_e( 'Linkido', 'tutor' ); ?>">
        </div>

        <div class="tutor-col-12 tutor-col-sm-4 tutor-col-md-12 tutor-col-lg-4 tutor-mb-32">
            <label class="tutor-form-label tutor-color-secondary">
                <?php esc_html_e( 'End Price', 'tutor' ); ?>
            </label>
            <input readonly class="tutor-form-control" type="text" name="end_price" id="end_price" value="<?php echo esc_attr( get_user_meta( $user->ID, 'end_price', true ) ); ?>" placeholder="<?php esc_attr_e( 'End Price', 'tutor' ); ?>">
        </div>
    </div>

    <div class="tutor-row">
        <div class="tutor-col-12 tutor-col-sm-6 tutor-col-md-12 tutor-col-lg-6 tutor-mb-32">
            <label class="tutor-form-label tutor-color-secondary">
                <?php esc_html_e( 'Display name publicly as', 'tutor' ); ?>

            </label>
            <select class="tutor-form-select" name="display_name">
                <?php
                foreach ( $public_display as $_id => $item ) {
                    ?>
                            <option <?php selected( $user->display_name, $item ); ?>><?php echo esc_html( $item ); ?></option>
                        <?php
                }
                ?>
            </select>
            <div class="tutor-fs-7 tutor-color-secondary tutor-mt-12">
                <?php esc_html_e( 'The display name is shown in all public fields, such as the author name, instructor name, student name, and name that will be printed on the certificate.', 'tutor' ); ?>
            </div>
        </div>
    </div>
<?php
}, 9 );

add_action( 'wp_ajax_tutor_update_profile', function() {
    $net_rate = sanitize_text_field( tutor_utils()->input_old( 'net_rate' ) );
    $linkido_percentage = sanitize_text_field( tutor_utils()->input_old( 'linkido_percentage' ) );
    $end_price = sanitize_text_field( tutor_utils()->input_old( 'end_price' ) );

    if ( $net_rate === "" && (int) $net_rate === 0 ) {
        delete_user_meta( $user_id, 'net_rate' );
        delete_user_meta( $user_id, 'end_price' );
    } else if ( $net_rate && is_numeric( $net_rate ) ) {
        update_user_meta( $user_id, 'net_rate', $net_rate );
    }
    
    if ( $linkido_percentage && is_numeric($linkido_percentage) ) {
        update_user_meta( $user_id, 'linkido_percentage', $linkido_percentage );
    }

    if ( $end_price && is_numeric($end_price) ) {
        update_user_meta( $user_id, 'end_price', $end_price );
    }
} );