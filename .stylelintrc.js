"use strict";

module.exports = {
    extends: ["stylelint-config-recommended-scss", "stylelint-prettier/recommended"],
    overrides: [
        {
            files: ["**/*.scss"],
            customSyntax: "postcss-scss",
        },
    ],
};
