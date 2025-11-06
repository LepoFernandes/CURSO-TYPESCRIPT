function reviewUsers(user, stars, review) {
    if (typeof stars === "number" && typeof review === "boolean" && review) {
        console.log("User ".concat(user, " give ").concat(stars, " stars and leave a message"));
    }
    else if (typeof stars === "number" && !review) {
        console.log("User ".concat(user, " give ").concat(stars, " stars and not leave a message"));
    }
}
reviewUsers("Lucas", 3, true);
reviewUsers("Pedro", 4);
reviewUsers("Gabriel", 1, false);
reviewUsers("Henrique", 3, true);
