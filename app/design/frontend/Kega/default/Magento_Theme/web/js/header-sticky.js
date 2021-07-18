/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
  'jquery'
], function ($) {
  'use strict';

  var headerContentHeight = 135;

  $(window).scroll(function () {
    if ($(window).scrollTop() > headerContentHeight && !($('body').hasClass('sticky'))) {
      $('body').addClass('header-sticky');
    } else {
      $('body').removeClass('header-sticky');
    }
  });

});