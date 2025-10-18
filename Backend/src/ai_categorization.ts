export function categorizeEmail(subject: string, body: string) {
    if(subject.includes("interview")) return "Interested";
    if(body.includes("meeting")) return "Meeting Booked";
    return "Not Interested";
}
