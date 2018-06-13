/**
 * @file
 * Javascript for Color Field.
 */
(function ($, Drupal) {

  'use strict';

  /**
   * Enables spectrum on color elements.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches a spectrum widget to a color input element.
   */
  Drupal.behaviors.color_field_spectrum = {
    attach: function (context, settings) {

      var $context = $(context);

      var spectrum_settings = settings.color_field.color_field_widget_spectrum;

      $context.find('.js-color-field-widget-spectrum').each(function (index, element) {
        var $element = $(element);
        var $element_color = $element.find('.js-color-field-widget-spectrum__color');
        var $element_opacity = $element.find('.js-color-field-widget-spectrum__opacity');

        $element_color.spectrum({
          showInitial: true,
          preferredFormat: "hex",
          showInput: spectrum_settings.show_input==1?true:false,
          showAlpha: spectrum_settings.show_alpha==1?true:false,
          showPalette: spectrum_settings.show_palette==1?true:false,
          showPaletteOnly: spectrum_settings.show_palette_only==1?true:false,
          palette: JSON.parse('[' + spectrum_settings.palette + ']'),
          showButtons: spectrum_settings.show_buttons==1?true:false,
          allowEmpty: spectrum_settings.allow_empty==1?true:false,


/*
          showInput: spectrum_settings.show_input,
          showAlpha: spectrum_settings.show_alpha,
          showPalette: spectrum_settings.show_palette,
          showPaletteOnly: !!spectrum_settings.show_palette_only,
          palette: [spectrum_settings.palette],
          showButtons: spectrum_settings.show_buttons,
          allowEmpty: spectrum_settings.allow_empty,
*/

          change: function(tinycolor) {
            if (tinycolor) {
              $element_color.val(tinycolor.toHexString());
              $element_opacity.val(tinycolor._roundA);
            }
/*
            $element_color.val(tinycolor.toHexString());
            $element_opacity.val(tinycolor._roundA);
*/
          }

        });

        // Set alpha value on load.
        if (!!spectrum_settings.show_alpha) {
          var tinycolor = $element_color.spectrum("get");
          var alpha = $element_opacity.val();
          if (alpha > 0) {
            tinycolor.setAlpha(alpha);
            $element_color.spectrum("set", tinycolor);
          }
        }

      });
    }
  };

})(jQuery, Drupal);