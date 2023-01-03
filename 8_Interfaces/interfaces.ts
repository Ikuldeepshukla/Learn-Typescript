interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

// we can redefine interface - reopening of the interface
interface User {
    githubToken?: string
}

// Admin have both the properties of Admin and User
interface Admin extends User {
     role: "admin" | "ta" | "learner"
}

const kuldeep: User = {
    dbId: 1234,
    email: "k@k.com",
    userId: 2211,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (couponname: "GET10", off: 10) => {
        return 10
    },
}

kuldeep.email = "k@ks.com"