# Library selected-tab accessibility

Role ADMIN. Route /app/library/my-courses after clicking Courses. Stable DOM: All products aria-selected=true; Courses aria-selected=false. Waiting for Courses aria-selected=true times out. The route changes correctly and the empty Library content renders. Download, Consultation and Wishlist navigation likewise sampled aria-selected=false. Local LibraryPage calculates pathname.split("/")[2], which is library for these routes; this is a suspected deployed cause, not a deployment version verification.
