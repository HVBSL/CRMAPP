import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import dotenv from "dotenv";

dotenv.config();
//*strategy

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

const strategy = new JwtStrategy(options, async (payload, done) => {
    const { id } = payload;
    const user = { id };
    if (user) {
        return done(null, user);
    }
    done(err, false);

});

export default strategy;