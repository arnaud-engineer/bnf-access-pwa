# BnF Access PWA

Progressive Web App wrapper for [BnF Access](https://bnfaccess.fr/).

The main site stays a normal website on `bnfaccess.fr`. This repository hosts the installable application shell intended for `app.bnfaccess.fr`.

## Configuration import

The embedded BnF Access site owns both sharing and importing, including QR scanning, preview, confirmation, and local storage. This shell has no separate controls. Its iframe delegates camera permission to the site; the site requests access only after the user clicks **Scanner un QR code**. Deploy the main site's sharing UI and scanner assets before publishing this shell change.
