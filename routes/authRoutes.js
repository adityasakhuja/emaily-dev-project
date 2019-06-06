const passport = require("passport");

module.exports = app => {
  // Initiate Passport authentication process
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Get userInfo from Google after receiving code
  app.get("/auth/google/callback", passport.authenticate("google"));
};
