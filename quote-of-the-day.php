<?php
/*
Plugin Name: Quote of the Day
Version: 1.0
Author: Abdul G Zziwa
*/

// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}

// Load CSS file
function qotd_enqueue_styles() {
    wp_enqueue_style('qotd-styles', plugin_dir_url(__FILE__) . 'style.css');
}
add_action('wp_enqueue_scripts', 'qotd_enqueue_styles');

function qotd_get_quotes() {
    return [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "You miss 100% of the shots you don’t take. - Wayne Gretzky",
        "Be yourself; everyone else is already taken. - Oscar Wilde",
    ];
}

// Function to get a random quote
function qotd_get_random_quote() {
    $quotes = qotd_get_quotes();
    return $quotes[array_rand($quotes)];
}

// Display the random quote
function qotd_display_quote() {
    $quote = qotd_get_random_quote();
    echo "<div class='qotd-quote'>$quote</div>";
}

// Hook into WordPress to display the quote
add_action('wp_footer', 'qotd_display_quote');


// Shortcode to display the random quote
function qotd_shortcode() {
    $quote = qotd_get_random_quote();
    return "<div class='qotd-quote'>$quote</div>";
}
add_shortcode('quote_of_the_day', 'qotd_shortcode');
