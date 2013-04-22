(function ($, undefined) {

    "use strict";

    var eles = 'input[type="submit"], input[type="image"], button:not([type]), button[type="submit"]',
        attrs = ['action', 'method', 'enctype', 'target', 'novalidate'];

    $.fn.formSubmissionAttributes = function () {

        this.each(function () {

            var $form = $(this),
                $inputs;

            if (!$form.is('form')) {
                console.warn('The formSubmissionAttributes funciton is only intended to be executed on forms');
                return;
            }

            $inputs = $form.find(eles);

            if ($form.attr('id') && $form.attr('id') !== '') {
                $inputs = $inputs.add('input[form="' + $form.attr('id') + '"],button[form="' + $form.attr('id') + '"]').filter(eles)
            }

            //backup originals
            $.each(attrs, function (i,a) {
                $form.data('o' + a, $form.attr(a));
            });

            $inputs.on('click', function (e) {

                var $this = $(this);

                $.each(attrs, function(i,a) {
                    $form.attr(a, $this.is('[form' + a + ']') ? $this.attr('form' + a) : $form.data('o' + a));
                });

            });

        });


    };

})(jQuery);