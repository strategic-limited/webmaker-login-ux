angular.module('templates-ngWebmakerLogin', ['join-webmaker-modal.html', 'modal-wrapper.html', 'reset-modal.html', 'signin-modal.html']);

angular.module("join-webmaker-modal.html", []).run(["$templateCache", function($templateCache) {
 $templateCache.put("join-webmaker-modal.html",
  "<div class=\"modal-header\">\n" +
  "  <button ng-click=\"close()\" ng-hide=\"\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
  "  <h3 class=\"modal-title\" ng-hide=\"currentState === MODALSTATE.welcome\">\n" +
  "    <a href=\"#\" ng-click=\"close()\" class=\"modal-title-left\">{{ 'Cancel' | i18n }}</a>\n" +
  "    <span class=\"modal-title-center\">{{ 'webmakerAuthCreateWelcome' | i18n }}</span>\n" +
  "    <button\n" +
  "      ng-show=\"currentState === MODALSTATE.inputEmail\"\n" +
  "      href=\"#\" ng-click=\"submitEmail()\" ng-disabled=\"!user.email || form.user.$error.accountExists || form.user.$error.invalidEmail\" tabindex=\"3\" class=\"btn-link modal-title-right\">{{ 'Next' | i18n }}</button>\n" +
  "    <button\n" +
  "      ng-show=\"currentState === MODALSTATE.inputUsername\"\n" +
  "      ng-disabled=\"!user.username || form.user.$error.invalidUsername || form.user.$error.usernameTaken || sendingRequest\" ng-click=\"submitUser()\" class=\"btn-link create-user modal-title-right\" tabindex=\"5\">{{ 'Sign up' | i18n }}</button>\n" +
  "  </h3>\n" +
  "  <h3 class=\"modal-title\" ng-show=\"currentState === MODALSTATE.welcome\">\n" +
  "    <a href=\"#\" ng-click=\"close()\" class=\"modal-title-left\">{{ 'Cancel' | i18n }}</a>\n" +
  "    <span>{{ 'webmakerAuthWelcome' | i18n }}</span>\n" +
  "    <a href=\"#\" ng-click=\"close()\" class=\"modal-title-right\">{{ 'Done' | i18n }}</a>\n" +
  "  </h3>\n" +
  "</div>\n" +
  "<div class=\"modal-body wm-login-ux\">\n" +
  "  <form class=\"form\" name=\"form.user\" novalidate>\n" +
  "    <div ng-show=\"currentState === MODALSTATE.inputEmail\">\n" +
  "      <div class=\"form-group\">\n" +
  "        <label for=\"webmaker-login-email\">{{ 'Email' | i18n }}</label>\n" +
  "        <input id=\"webmaker-login-email\" ng-model=\"user.email\" ng-keyup=\"validateEmail();\" type=\"text\" class=\"form-control\" name=\"email\" autocomplete=\"off\" autofocus tabindex=\"1\" required focus-on=\"create-user-email\">\n" +
  "      </div>\n" +
  "      <div class=\"alert alert-danger\" ng-show=\"form.user.$error.agreeToTerms\" ng-bind-html=\"'webmakerAuthAgreeError' | i18n\"></div>\n" +
  "      <div class=\"alert alert-warning\" ng-show=\"form.user.$error.accountExists\" bind-trusted-html=\"'WebmakerAccountExists' | i18n\"></div>\n" +
  "      <div class=\"alert alert-danger\" ng-show=\"form.user.$error.invalidEmail\" ng-bind-html=\"'NotAnEmail' | i18n\"></div>\n" +
  "      <div class=\"terms-checkbox checkbox\">\n" +
  "        <input id=\"agree-to-terms\" ng-model=\"user.agree\" type=\"checkbox\" ng-disabled=\"form.user.$error.accountExists\" ng-change=\"agreeToTermsChanged();\" name=\"agree\" tabindex=\"2\">\n" +
  "        <label for=\"agree-to-terms\">\n" +
  "          <div><span></span></div>\n" +
  "          <span ng-bind-html=\"'webmakerAuthAgreeToTerms' | i18n\"></span>\n" +
  "        </label>\n" +
  "      </div>\n" +
  "      <div class=\"mailing-list-checkbox checkbox\">\n" +
  "        <input id=\"subscribe-to-list\" ng-model=\"user.subscribeToList\" type=\"checkbox\" ng-disabled=\"form.user.$error.accountExists\" name=\"subscribeToList\" tabindex=\"3\">\n" +
  "        <label for=\"subscribe-to-list\">\n" +
  "          <div><span></span></div>\n" +
  "          <span ng-bind-html=\"'webmakerAuthMailingList' | i18n\"></span>\n" +
  "        </label>\n" +
  "      </div>\n" +
  "      <div class=\"cta-links clearfix\">\n" +
  "        <button ng-click=\"submitEmail()\" ng-disabled=\"!user.email || form.user.$error.accountExists || form.user.$error.invalidEmail\" class=\"create-user btn btn-primary hidden-xs-login\" type=\"button\" tabindex=\"3\">{{ 'Sign up' | i18n }}</button>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "\n" +
  "    <div ng-show=\"currentState === MODALSTATE.inputUsername\">\n" +
  "      <div class=\"form-group\">\n" +
  "        <label for=\"pre-username\">{{ 'webmakerAuthChooseUsername' | i18n }}</label>\n" +
  "        <input ng-model=\"user.username\" name=\"username\" ng-change=\"validateUsername()\" class=\"form-control username\" autocomplete=\"off\" required autofocus tabindex=\"4\" focus-on=\"create-user-username\" maxlength=\"20\" minlength=\"1\">\n" +
  "        <div class=\"visible-xs help-block text-center\"><strong class=\"username-with-url\">{{user.username}}</strong></div>\n" +
  "      </div>\n" +
  "      <div class=\"alert alert-danger\" ng-show=\"form.user.$error.invalidUsername\" ng-bind-html=\"'webmakerAuthUsernameInvalid' | i18n\"></div>\n" +
  "      <div class=\"alert alert-danger\" ng-show=\"form.user.$error.serverError\" ng-bind-html=\"'webmakerAuthServerError' | i18n\"></div>\n" +
  "      <div class=\"alert alert-danger\" ng-show=\"form.user.$error.usernameTaken\" ng-bind-html=\"'webmakerAuthTakenError' | i18n\"></div>\n" +
  "      <div ng-show=\"skippedEmail\" class=\"mailing-list-checkbox checkbox\">\n" +
  "        <input id=\"subscribe-to-list\" ng-model=\"user.subscribeToList\" type=\"checkbox\" ng-disabled=\"form.user.$error.accountExists\" name=\"subscribeToList\" tabindex=\"2\">\n" +
  "        <label for=\"subscribe-to-list\">\n" +
  "          <div><span></span></div>\n" +
  "          <span ng-bind-html=\"'webmakerAuthMailingList' | i18n\"></span>\n" +
  "        </label>\n" +
  "      </div>\n" +
  "      <button ng-disabled=\"!user.username || form.user.$error.invalidUsername || form.user.$error.usernameTaken || sendingRequest\" ng-click=\"submitUser()\" class=\"create-user btn btn-primary hidden-xs-login\" type=\"button\" tabindex=\"5\">{{ 'webmakerAuthCreateAccount' | i18n }}</button>\n" +
  "    </div>\n" +
  "\n" +
  "    <div ng-show=\"currentState === MODALSTATE.welcome\" class=\"welcome\">\n" +
  "      <p class=\"subheadline\">{{ 'aboutWebmaker' | i18n }}</p>\n" +
  "\n" +
  "        <!-- Goggles -->\n" +
  "        <div class=\"tool-desc\" ng-show=\"welcomeModalIdx === 0\">\n" +
  "          <div class=\"icon\">\n" +
  "            <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n" +
  "            <svg width=\"276px\" height=\"210px\" viewBox=\"0 0 276 210\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
  "              <title>Goggles</title>\n" +
  "              <desc>XRay Goggles.</desc>\n" +
  "              <defs></defs>\n" +
  "              <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
  "                <g id=\"Artboard-27\" sketch:type=\"MSArtboardGroup\" transform=\"translate(-8.000000, -25.000000)\">\n" +
  "                  <g id=\"goggles\" sketch:type=\"MSLayerGroup\" transform=\"translate(8.000000, 25.000000)\">\n" +
  "                    <path d=\"M256.460878,100.757257 C254.300432,98.595 248.740338,93.6349115 244.461405,91.3416372 L87.2010811,2.31836283 C82.0372703,-0.216504425 74.6962297,-1.41238938 69.0606081,4.21300885 C63.4091351,9.83747788 64.2679054,16.7711947 66.8740541,21.7935398 L156.207608,178.545531 C158.362459,181.89531 163.757514,188.816947 165.933811,190.960619 C190.938851,215.872566 231.455838,215.88 256.460878,190.960619 C281.469649,166.057965 281.469649,125.658982 256.460878,100.757257\" id=\"Fill-1\" fill=\"#ECA5C0\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M206.411635,4.22137168 C200.776946,-1.41238938 193.033095,-0.216504425 188.474432,2.21336283 L32.3423514,90.5518142 C27.5645676,93.5884513 21.1746081,98.595 19.0113649,100.757257 C-5.99367568,125.658982 -5.99367568,166.057965 19.0113649,190.960619 C44.015473,215.872566 84.5389865,215.872566 109.525378,190.960619 C111.700743,188.816947 116.493446,182.464912 118.293041,180.08708 L208.316595,22.2302655 C211.235108,17.7031858 212.050986,9.83747788 206.411635,4.22137168\" id=\"Fill-2\" fill=\"#59B3D7\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M137.699757,146.04292 L187.347122,58.9867699 L137.736122,30.9025221 L88.0896892,58.9923451 L137.699757,146.04292\" id=\"Fill-3\" fill=\"#4E72A7\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M19.0113649,190.960619 C-5.99367568,166.057965 -5.99367568,125.658982 19.0113649,100.757257 C44.015473,75.8360177 84.5389865,75.8360177 109.525378,100.757257 C134.526689,125.658982 134.526689,166.057965 109.525378,190.960619 C84.5389865,215.872566 44.015473,215.872566 19.0113649,190.960619\" id=\"Fill-4\" fill=\"#369ECD\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M256.526149,190.960619 C231.520176,215.88 191.001324,215.872566 165.995351,190.960619 C140.994041,166.057965 140.994041,125.667345 165.995351,100.747965 C191.001324,75.8360177 231.520176,75.8360177 256.526149,100.757257 C281.532122,125.658982 281.532122,166.057965 256.526149,190.960619\" id=\"Fill-5\" fill=\"#E36D9E\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M235.671365,172.371903 C222.429892,185.550796 200.976486,185.550796 187.746203,172.371903 C174.501,159.16885 174.501,137.799027 187.746203,124.595044 C200.976486,111.409646 222.429892,111.409646 235.671365,124.612699 C248.903514,137.799027 248.903514,159.16885 235.671365,172.371903\" id=\"Fill-6\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M211.686405,130.685973 C197.874284,130.685973 186.669243,142.526814 186.669243,147.321504 C186.669243,148.542478 187.402135,149.697478 188.704743,150.735398 C189.952338,148.202389 191.521622,145.792035 193.651297,143.673451 C195.952541,141.379248 198.579203,139.622124 201.369041,138.337035 C195.774446,143.999602 195.790297,153.095575 201.451095,158.720973 C207.112824,164.37146 216.304743,164.37146 221.987919,158.720973 C227.658041,153.061195 227.658041,143.897389 221.987919,138.246903 C221.513311,137.773938 220.980892,137.392035 220.455,137.00177 C224.543716,138.231106 228.400257,140.452832 231.635797,143.673451 C233.390635,145.410133 234.738,147.370752 235.893284,149.405708 C236.381878,148.741327 236.7045,148.044425 236.7045,147.321504 C236.7045,142.526814 225.511581,130.685973 211.686405,130.685973 L211.686405,130.685973 Z M220.613514,144.661195 C220.613514,146.779779 218.886649,148.491372 216.75977,148.491372 C214.626365,148.491372 212.908824,146.779779 212.908824,144.661195 C212.908824,142.542611 214.626365,140.822655 216.75977,140.822655 C218.886649,140.822655 220.613514,142.542611 220.613514,144.661195 L220.613514,144.661195 Z\" id=\"Fill-7\" fill=\"#E36D9E\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M86.2761081,172.371903 C73.0467568,185.550796 51.5765676,185.550796 38.3490811,172.371903 C25.1048108,159.16885 25.1048108,137.799027 38.3490811,124.595044 C51.5765676,111.409646 73.0467568,111.409646 86.2761081,124.612699 C99.5073243,137.799027 99.5073243,159.16885 86.2761081,172.371903\" id=\"Fill-8\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                    <path d=\"M62.3051351,130.685973 C48.479027,130.685973 37.2861081,142.526814 37.2861081,147.321504 C37.2861081,148.542478 38.0031486,149.697478 39.2871081,150.735398 C40.5552162,148.202389 42.1384865,145.792035 44.2373919,143.673451 C46.5367703,141.38854 49.1615676,139.630487 51.9476757,138.347257 C46.3754595,144.014469 46.3978378,153.095575 52.0334595,158.720973 C57.7026486,164.37146 66.9085541,164.37146 72.5768108,158.720973 C78.2599865,153.061195 78.2599865,143.897389 72.5768108,138.246903 C72.0938108,137.765575 71.553,137.383673 71.0233784,136.984115 C75.134473,138.214381 79.0087297,140.440752 82.254527,143.673451 C83.9897838,145.410133 85.3362162,147.370752 86.5138784,149.405708 C86.981027,148.741327 87.3111081,148.044425 87.3111081,147.321504 C87.3111081,142.526814 76.1107297,130.685973 62.3051351,130.685973 L62.3051351,130.685973 Z M71.2163919,144.661195 C71.2163919,146.779779 69.4913919,148.491372 67.3645135,148.491372 C65.2478919,148.491372 63.5089054,146.779779 63.5089054,144.661195 C63.5089054,142.542611 65.2478919,140.822655 67.3645135,140.822655 C69.4913919,140.822655 71.2163919,142.542611 71.2163919,144.661195 L71.2163919,144.661195 Z\" id=\"Fill-9\" fill=\"#369ECD\" sketch:type=\"MSShapeGroup\"></path>\n" +
  "                  </g>\n" +
  "                </g>\n" +
  "              </g>\n" +
  "            </svg>\n" +
  "          </div>\n" +
  "          <h4>{{ 'XRay-Goggles' | i18n }}</h4>\n" +
  "          <p>{{ 'AboutGoggles' | i18n }}</p>\n" +
  "          <div class=\"clearfix\">\n" +
  "            <a class=\"create-user btn btn-primary\" type=\"button\" href=\"https://webmaker.org/goggles\" autofocus>{{'TryGoggles' | i18n }}</a>\n" +
  "            <a href=\"https://webmaker.org/explore\" class=\"explore-link\">{{ 'ExploreWebmaker' | i18n }}</a>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "\n" +
  "        <!-- simplified CTA -->\n" +
  "        <div class=\"tool-desc\" ng-show=\"simpleCTA\">\n" +
  "          <div class=\"clearfix\">\n" +
  "            <button class=\"create-user btn btn-primary\" type=\"button\" href=\"#\" ng-click=\"close()\">{{ 'Lets Go!' | i18n }}</button>\n" +
  "            <a href=\"https://webmaker.org/explore\" class=\"explore-link\">{{ 'ExploreWebmaker' | i18n }}</a>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "    </div>\n" +
  "  </form>\n" +
  "</div>\n" +
  "");
}]);

angular.module("modal-wrapper.html", []).run(["$templateCache", function($templateCache) {
 $templateCache.put("modal-wrapper.html",
  "<div class=\"webmaker-login-ux modal-backdrop fade in\"></div>\n" +
  "<div class=\"webmaker-login-ux modal fade in\" style='display: block; z-index: 99999;  background-image: url(\"{{loginBgImage}}\")'>\n" +
  "  <div class=\"modal-dialog\">\n" +
  "    <div class=\"modal-content\"></div>\n" +
  "  </div>\n" +
  "\n" +
  "  <div class=\"modal-description\">\n" +
  "    <div class=\"vrlogo\" style='background-image: url(\"{{loginLogo}}\")'></div>\n" +
  "    <div>\n" +
  "      <b>{{'Wrapper Title' | i18n}} </b>\n" +
  "      {{'Wrapper Subtitle' | i18n}}\n" +
  "    </div>\n" +
  "\n" +
  "  </div>\n" +
  "</div>\n" +
  "");
}]);

angular.module("reset-modal.html", []).run(["$templateCache", function($templateCache) {
 $templateCache.put("reset-modal.html",
  "<div class=\"modal-header\">\n" +
  "  <button ng-click=\"close()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
  "  <h3 class=\"modal-title\">\n" +
  "    <a href=\"#\" ng-click=\"close()\" class=\"modal-title-left\">{{ 'Cancel' | i18n }}</a>\n" +
  "    <span class=\"modal-title-center\">{{ 'Reset Password' | i18n }}</span>\n" +
  "    <button ng-click=\"submitResetRequest()\" ng-disabled=\"sendingRequest || !password.value || !password.confirmValue || !passwordsMatch || form.password.$error.passwordsMustMatch\" class=\"modal-title-right btn-link\" type=\"button\" tabindex=\"3\">{{ 'Submit' | i18n }}</button>\n" +
  "  </h3>\n" +
  "</div>\n" +
  "<div class=\"modal-body clearfix wm-login-ux\">\n" +
  "  <form class=\"form\" name=\"form.password\" novalidate>\n" +
  "\n" +
  "    <div class=\"alert alert-danger\" ng-show=\"form.password.$error.passwordsMustMatch\" ng-bind-html=\"'passwords do not match' | i18n\"></div>\n" +
  "    <div class=\"alert alert-danger\" ng-show=\"form.password.$error.weakPassword\" ng-bind-html=\"'Password too weak' | i18n\"></div>\n" +
  "    <div class=\"alert alert-danger\" ng-show=\"form.password.$error.serverError\" ng-bind-html=\"'error setting password' | i18n\"></div>\n" +
  "\n" +
  "    <div>\n" +
  "      <div class=\"form-group\">\n" +
  "        <label for=\"value\">&nbsp;</label>\n" +
  "        <input type=\"password\" name=\"value\" placeholder=\"{{ 'Set a Password' | i18n }}\"\n" +
  "               class=\"form-control\" ng-model=\"password.value\" autocomplete=\"off\" required tabindex=\"1\" autofocus=\"true\"\n" +
  "               ng-change=\"checkPasswordStrength(); checkPasswordsMatch(false);\"\n" +
  "               ng-blur=\"checkPasswordStrength(true); checkPasswordsMatch(true);\">\n" +
  "\n" +
  "        <label for=\"confirmValue\">&nbsp;</label>\n" +
  "        <input type=\"password\" name=\"confirmValue\" placeholder=\"{{ 'Confirm your password' | i18n }}\"\n" +
  "               class=\"form-control\" ng-model=\"password.confirmValue\" autocomplete=\"off\" required tabindex=\"1\" autofocus=\"true\"\n" +
  "               ng-change=\"checkPasswordsMatch(false)\"\n" +
  "               ng-blur=\"checkPasswordsMatch(true)\">\n" +
  "      </div>\n" +
  "      <div class=\"form-group\">\n" +
  "        <p class=\"password-label\">{{ 'Minimum password requirements' | i18n }}</p>\n" +
  "        <ul class=\"list-unstyled password-strength\">\n" +
  "          <li id=\"eight-chars\" ng-class=\"{valid: eightCharsState === 'valid', invalid: eightCharsState === 'invalid', 'default': eightCharsState === 'default'}\">{{ 'At least 6 characters' | i18n }}</li>\n" +
  "          <li id=\"one-each-case\" ng-class=\"{valid: oneEachCaseState === 'valid', invalid: oneEachCaseState === 'invalid', 'default': oneEachCaseState === 'default'}\">{{ 'At least 1 upper and lower case character' | i18n }}</li>\n" +
  "          <li id=\"one-number\" ng-class=\"{valid: oneNumberState === 'valid', invalid: oneNumberState === 'invalid', 'default': oneNumberState === 'default'}\">{{ 'At least 1 number' | i18n }}</li>\n" +
  "        </ul>\n" +
  "      </div>\n" +
  "      <div class=\"cta-links clearfix\">\n" +
  "        <button style=\"display: inline !important\" ng-click=\"submitResetRequest()\" ng-disabled=\"sendingRequest || !password.value || !password.confirmValue || !passwordsMatch || form.password.$error.passwordsMustMatch || eightCharsState==='invalid'\" class=\"reset-password btn btn-primary hidden-xs-login\" type=\"button\" tabindex=\"3\">{{ 'Submit' | i18n }}</button>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </form>\n" +
  "</div>\n" +
  "");
}]);

angular.module("signin-modal.html", []).run(["$templateCache", function($templateCache) {
 $templateCache.put("signin-modal.html",
  "<div class=\"modal-header\">\n" +
  "  <button ng-click=\"close()\" type=\"button\" class=\"close\" ng-hide=\"true\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
  "  <h3 class=\"modal-title\" ng-show=\"currentState === MODALSTATE.enterUid || currentState === MODALSTATE.enterPassword\">\n" +
  "    <button href=\"#\" ng-click=\"close()\" class=\"modal-title-left btn-link\">{{ 'Cancel' | i18n }}</button>\n" +
  "    <span class=\"modal-title-center\">{{ 'Sign in' | i18n }}</span>\n" +
  "    <button ng-show=\"currentState === MODALSTATE.enterUid\"\n" +
  "      ng-disabled=\"sendingRequest\"\n" +
  "      ng-click=\"submitUid()\"\n" +
  "      class=\"modal-title-right btn-link\">{{ 'Next' | i18n }}</button>\n" +
  "    <button ng-show=\"currentState === MODALSTATE.enterPassword\"\n" +
  "      class=\"modal-title-right btn-link\"\n" +
  "      ng-disabled=\"sendingRequest\"\n" +
  "      ng-click=\"user.password && submitPassword()\" tabindex=\"9\">{{ 'Submit' | i18n }}</button>\n" +
  "  </h3>\n" +
  "   <h3 class=\"modal-title\" ng-show=\"currentState === MODALSTATE.enterEmail\">\n" +
  "    Reset Password\n" +
  "   </h3>\n" +
  "  <h3 class=\"modal-title\" ng-show=\"currentState === MODALSTATE.checkEmail || currentState === MODALSTATE.resetRequestSent || currentState === MODALSTATE.enterKey\">\n" +
  "    <a href=\"#\" ng-click=\"close()\" class=\"modal-title-left\">{{ 'Cancel' | i18n }}</a>\n" +
  "    <span class=\"modal-title-center\">{{ 'checkEmail' | i18n }}</span>\n" +
  "    <button\n" +
  "      ng-show=\"currentState === MODALSTATE.enterKey\"\n" +
  "      ng-disabled=\"sendingRequest\"\n" +
  "      ng-click=\"user.key && submitKey()\"\n" +
  "      tabindex=\"7\"\n" +
  "      class=\"submit-userid modal-title-right btn-link\">{{ 'Next' | i18n }}</button>\n" +
  "    <a\n" +
  "      class=\"modal-title-right\"\n" +
  "      ng-show=\"currentState === MODALSTATE.checkEmail\"\n" +
  "      ng-click=\"enterKey()\"\n" +
  "      tabindex=\"4\">{{ 'Next' | i18n }}</a>\n" +
  "    <a href=\"#\"\n" +
  "      ng-show=\"currentState === MODALSTATE.resetRequestSent\"\n" +
  "      ng-click=\"close()\" class=\"modal-title-right\">{{ 'Done' | i18n }}</a>\n" +
  "  </h3>\n" +
  "</div>\n" +
  "<div class=\"modal-body wm-login-ux\">\n" +
  "  <form class=\"form\" name=\"form.user\" novalidate>\n" +
  "    <div class=\"alert alert-success\" ng-show=\"passwordWasReset && currentState === MODALSTATE.enterUid\" ng-bind-html=\"'Password Reset Success' | i18n\"></div>\n" +
  "    <div class=\"alert alert-danger\" ng-show=\"expiredLoginLink && currentState === MODALSTATE.enterUid\" ng-bind-html=\"'Expired Login Link' | i18n\"></div>\n" +
  "    <div class=\"alert alert-danger\" ng-show=\"form.user.$error.resetRequestFailed\" ng-bind-html=\"'resetRequestFailed' | i18n\"></div>\n" +
  "\n" +
  "    <!-- Enter uid -->\n" +
  "    <div ng-show=\"currentState === MODALSTATE.enterUid;\">\n" +
  "      <div class=\"form-group\">\n" +
  "        <label for=\"uid\">&nbsp;</label>\n" +
  "        <input name=\"uid\" placeholder=\"USERNAME\" class=\"form-control\" ng-change=\"trimInput(user.uid, 'uid')\" ng-model=\"user.uid\" autocomplete=\"on\" required tabindex=\"1\" autofocus=\"true\" focus-on=\"login-uid\" ng-keyup=\"$event.keyCode === 13 && !sendingRequest && submitUid()\">\n" +
  "        <label for=\"password\">&nbsp;</label>\n" +
  "        <input type=\"password\" placeholder=\"PASSWORD\" class=\"form-control\" ng-change=\"trimInput(user.password, 'password')\" required name=\"password\" ng-model=\"user.password\" tabindex=\"2\" focus-on=\"enter-password\" ng-keyup=\"$event.keyCode === 13 && user.password && !sendingRequest && submitPassword()\">\n" +
  "      </div>\n" +
  "      <div class=\"alert alert-warning\" ng-show=\"form.user.$error.noAccount\" bind-trusted-html=\"'No account found for your uid' | i18n\"></div>\n" +
  "       <div class=\"alert alert-danger\" ng-show=\"form.user.$error.passwordSigninFailed\" ng-bind-html=\"'passLoginFailed' | i18n\"></div>\n" +
  "      <div class=\"alert alert-danger\" ng-show=\"form.user.$error.invalidUid\" ng-bind-html=\"'That does not look like an email address or username' | i18n\"></div>\n" +
  "       <div class=\"remember-me-password checkbox\">\n" +
  "          <input id=\"remember-me-password\" ng-model=\"user.rememberMe\" type=\"checkbox\" name=\"rememberMe\" tabindex=\"3\">\n" +
  "          <label for=\"remember-me-password\" tabindex=\"4\">\n" +
  "            <div><span></span></div>\n" +
  "            <span ng-bind-html=\"'Remember me for one year' | i18n\"></span>\n" +
  "          </label>\n" +
  "        </div>\n" +
  "      <div class=\"cta-links clearfix\">\n" +
  "        <button type=\"button\" class=\"submit-password btn btn-primary\" type=\"button\" ng-disabled=\"sendingRequest\" ng-click=\"user.password && submitPassword()\" tabindex=\"5\">{{ 'Submit' | i18n }}</button>\n" +
  "        <p><a ng-click=\"requestEmail()\">{{ 'Reset your password?' | i18n }}</a> / <a target=\"_blank\" href=\"{{supportLink}}\">{{ 'Contact Support' | i18n }}</a></p>\n" +
  "\n" +
  "        <div ng-hide=\"true\">\n" +
  "          <p class=\"align-left\">{{ 'or' | i18n }}</p>\n" +
  "          <button type=\"button\" wm-persona-login class=\"btn btn-link\" ng-disabled=\"sendingRequest\" ng-click=\"usePersona();\" tabindex=\"6\">{{ 'log in with Persona' | i18n }}</button>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "    <!-- end enter uid -->\n" +
  "\n" +
  "    <!-- Enter Email -->\n" +
  "    <div ng-show=\"currentState === MODALSTATE.enterEmail;\">\n" +
  "\n" +
  "      <div class=\"form-group\">\n" +
  "        <label for=\"uid\">{{ 'EmailOrUsername' | i18n }}</label>\n" +
  "        <input name=\"myuid\" class=\"form-control\" placeholder=\"User name (Your Email)\" ng-model=\"user.uid\" autocomplete=\"on\" required tabindex=\"1\" autofocus=\"true\" focus-on=\"login-uid2\">\n" +
  "\n" +
  "      </div>\n" +
  "      <div class=\"alert alert-warning\" ng-show=\"form.user.$error.noAccount\" bind-trusted-html=\"'No account found for your uid' | i18n\"></div>\n" +
  "       <div class=\"alert alert-danger\" ng-show=\"form.user.$error.passwordSigninFailed\" ng-bind-html=\"'passLoginFailed' | i18n\"></div>\n" +
  "      <div class=\"alert alert-danger\" ng-show=\"form.user.$error.invalidUid\" ng-bind-html=\"'That does not look like an email address or username' | i18n\"></div>\n" +
  "      <div class=\"cta-links clearfix\">\n" +
  "        <p><a ng-click=\"requestReset()\">{{ 'Click to Reset your password' | i18n }}</a></p>\n" +
  "        <p class=\"align-left\"><a href=\"\">{{ 'Back' | i18n }}</a></p>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "    <!-- end enter Email -->\n" +
  "\n" +
  "    <!-- checkEmail begins -->\n" +
  "    <div class=\"checkEmail\" ng-show=\"currentState === MODALSTATE.checkEmail\">\n" +
  "      <div class=\"mailIcon clearfix\">\n" +
  "        <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n" +
  "        <svg width=\"115\" height=\"66\" viewBox=\"0 0 115 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
  "          <path d=\"M26.2266 22.3947V7.31944C26.2266 3.82986 29.065 1 32.5651 1H106.92C110.421 1 113.259 3.82986 113.259 7.31944V57.9444C113.259 61.434 110.421 64.2639 106.92 64.2639H32.5651C29.065 64.2639 26.2266 61.434 26.2266 57.9444V41.9954\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M1 19.0961H17.7401\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M5.26611 46.1562H17.0666\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M9.37012 32.6262H33.1279\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M101.928 11.353L85.8383 26.0579L69.7425 40.7627L53.6467 26.0579L37.5566 11.353\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M37.5566 54.316L60.3624 32.6262\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M101.928 54.316L79.1226 32.6262\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "        </svg>\n" +
  "        <p>{{ 'tokenMessage' | i18n }}</p>\n" +
  "      </div>\n" +
  "      <div class=\"enter-key hidden-xs-login\">\n" +
  "        <a ng-click=\"enterKey()\" tabindex=\"4\" ng-bind-html=\"'Enter key' | i18n\"></a>\n" +
  "      </div>\n" +
  "      <hr>\n" +
  "      <footer class=\"help-footer\">\n" +
  "        <p ng-bind-html=\"'trouble with email' | i18n\"></p>\n" +
  "      </footer>\n" +
  "    </div>\n" +
  "    <!-- checkEmail ends -->\n" +
  "\n" +
  "    <!-- enterToken begins -->\n" +
  "    <div class=\"enterToken\" ng-show=\"currentState === MODALSTATE.enterKey\">\n" +
  "      <div class=\"email-container\">\n" +
  "        <div class=\"mailIcon text-center\">\n" +
  "          <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n" +
  "          <svg width=\"115\" height=\"66\" viewBox=\"0 0 115 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
  "            <path d=\"M26.2266 22.3947V7.31944C26.2266 3.82986 29.065 1 32.5651 1H106.92C110.421 1 113.259 3.82986 113.259 7.31944V57.9444C113.259 61.434 110.421 64.2639 106.92 64.2639H32.5651C29.065 64.2639 26.2266 61.434 26.2266 57.9444V41.9954\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M1 19.0961H17.7401\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M5.26611 46.1562H17.0666\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M9.37012 32.6262H33.1279\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M101.928 11.353L85.8383 26.0579L69.7425 40.7627L53.6467 26.0579L37.5566 11.353\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M37.5566 54.316L60.3624 32.6262\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M101.928 54.316L79.1226 32.6262\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          </svg>\n" +
  "        </div>\n" +
  "        <div class=\"key-group\">\n" +
  "          <div class=\"form-group\">\n" +
  "            <label for=\"key\" ng-show=\"!verified\">{{ 'Visit Email' | i18n }}</label>\n" +
  "            <label for=\"key\" ng-show=\"verified\">{{ 'Verified Visit Email' | i18n }}</label>\n" +
  "            <input ng-model=\"user.key\" name=\"key\" class=\"form-control\" type=\"text\" required tabindex=\"6\" focus-on=\"enter-key\" ng-keyup=\"$event.keyCode === 13 && user.key && !sendingRequest && submitKey()\">\n" +
  "          </div>\n" +
  "          <div class=\"alert alert-danger\" ng-show=\"form.user.$error.tokenSendFailed\" ng-bind-html=\"'problem sending token' | i18n\"></div>\n" +
  "          <div class=\"alert alert-danger\" ng-show=\"form.user.$error.invalidKey\" ng-bind-html=\"'incorrectToken' | i18n\"></div>\n" +
  "          <div class=\"remember-me-token checkbox\">\n" +
  "            <input id=\"remember-me-token\" ng-model=\"user.rememberMe\" type=\"checkbox\" name=\"rememberMe\" tabindex=\"7\">\n" +
  "            <label for=\"remember-me-token\" tabindex=\"7\">\n" +
  "              <div><span></span></div>\n" +
  "              <span ng-bind-html=\"'Remember me for one year' | i18n\"></span>\n" +
  "            </label>\n" +
  "          </div>\n" +
  "          <button type=\"button\" class=\"hidden-xs-login submit-userid btn btn-primary\" type=\"button\" ng-disabled=\"sendingRequest\" ng-click=\"user.key && submitKey()\" tabindex=\"8\">{{ 'Submit' | i18n }}</button>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "      <hr>\n" +
  "      <footer class=\"help-footer\">\n" +
  "        <p ng-bind-html=\"'trouble with email' | i18n\"></p>\n" +
  "      </footer>\n" +
  "    </div>\n" +
  "    <!-- enterToken ends -->\n" +
  "\n" +
  "    <div class=\"enterPassword\" ng-show=\"currentState === MODALSTATE.enterPassword\">\n" +
  "      <div class=\"password-container\">\n" +
  "        <div class=\"form-group\">\n" +
  "          <label for=\"password\">{{ 'Password' | i18n }}</label>\n" +
  "          <input type=\"password\" class=\"form-control\" required name=\"password\" ng-model=\"user.password\" tabindex=\"9\" focus-on=\"enter-password\" ng-keyup=\"$event.keyCode === 13 && user.password && !sendingRequest && submitPassword()\">\n" +
  "        </div>\n" +
  "        <div class=\"alert alert-danger\" ng-show=\"form.user.$error.passwordSigninFailed\" ng-bind-html=\"'passLoginFailed' | i18n\"></div>\n" +
  "        <div class=\"remember-me-password checkbox\">\n" +
  "          <input id=\"remember-me-password\" ng-model=\"user.rememberMe\" type=\"checkbox\" name=\"rememberMe\" tabindex=\"10\">\n" +
  "          <label for=\"remember-me-password\" tabindex=\"10\">\n" +
  "            <div><span></span></div>\n" +
  "            <span ng-bind-html=\"'Remember me for one year' | i18n\"></span>\n" +
  "          </label>\n" +
  "        </div>\n" +
  "        <div class=\"cta-links clearfix\">\n" +
  "          <button type=\"button\" class=\"submit-password btn btn-primary hidden-xs-login\" type=\"button\" ng-disabled=\"sendingRequest\" ng-click=\"user.password && submitPassword()\" tabindex=\"11\">{{ 'Submit' | i18n }}</button>\n" +
  "          <p><a ng-click=\"requestReset()\">{{ 'Forgot your password?' | i18n }}</a></p>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "      <hr>\n" +
  "      <footer class=\"help-footer\">\n" +
  "        <!-- p class=\"switch-back\">{{ 'you can switch to webmaker login' | i18n }}</p -->\n" +
  "      </footer>\n" +
  "    </div>\n" +
  "\n" +
  "    <div class=\"resetRequestSent\" ng-show=\"currentState === MODALSTATE.resetRequestSent\">\n" +
  "      <div class=\"mailIcon clearfix\">\n" +
  "        <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n" +
  "        <svg width=\"115\" height=\"66\" viewBox=\"0 0 115 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
  "          <path d=\"M26.2266 22.3947V7.31944C26.2266 3.82986 29.065 1 32.5651 1H106.92C110.421 1 113.259 3.82986 113.259 7.31944V57.9444C113.259 61.434 110.421 64.2639 106.92 64.2639H32.5651C29.065 64.2639 26.2266 61.434 26.2266 57.9444V41.9954\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M1 19.0961H17.7401\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M5.26611 46.1562H17.0666\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M9.37012 32.6262H33.1279\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M101.928 11.353L85.8383 26.0579L69.7425 40.7627L53.6467 26.0579L37.5566 11.353\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M37.5566 54.316L60.3624 32.6262\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          <path d=\"M101.928 54.316L79.1226 32.6262\" stroke=\"#505068\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "        </svg>\n" +
  "        <p>{{ 'resetMessage' | i18n }}</p>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </form>\n" +
  "</div>\n" +
  "");
}]);
