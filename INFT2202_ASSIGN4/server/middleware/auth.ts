/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
export function ensureAuth(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.status(401).json({ message: "Unauthorized" });
}
