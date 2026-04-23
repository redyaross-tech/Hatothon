const emails = [
    {
        subject: "Urgent: Verify Your Bank Account Now",
        sender: "security@bank-verification-alert.com",
        text: "Dear customer, we noticed unusual activity on your bank account. Please verify your identity immediately by clicking the link below, or your account will be suspended within 24 hours.",
        type: "scam"
    },
    {
        subject: "Your Package Could Not Be Delivered",
        sender: "delivery-update@fastparcel-track.net",
        text: "We attempted to deliver your package today, but no one was home. Please confirm your address and pay a small redelivery fee using the secure link below.",
        type: "scam"
    },
    {
        subject: "You Won a Free iPhone 15",
        sender: "promo@winner-reward-center.com",
        text: "Congratulations! You have been selected as today's lucky winner. Claim your brand new iPhone 15 now by filling in your personal details and paying a small shipping fee.",
        type: "scam"
    },
    {
        subject: "Password Expiring Today",
        sender: "support@micr0soft-helpdesk.com",
        text: "Your email password expires today. To avoid losing access to your mailbox, confirm your login details now using the secure company form.",
        type: "scam"
    },
    {
        subject: "Tax Refund Available",
        sender: "refunds@tax-office-secure.com",
        text: "After reviewing your records, we found that you are eligible for a tax refund of $428.70. To receive your money, submit your bank account and login credentials through the form below.",
        type: "scam"
    },
    {
        subject: "Suspicious Login Attempt",
        sender: "alerts@paypaI-account-safe.com",
        text: "We detected a suspicious login attempt from a new device. If this was not you, confirm your account immediately to protect your funds.",
        type: "scam"
    },
    {
        subject: "Final Warning: Account Suspension",
        sender: "notice@streaming-billing-check.com",
        text: "Your subscription payment failed. This is your final warning. Update your billing information now to avoid permanent account suspension.",
        type: "scam"
    },
    {
        subject: "Claim Your Scholarship Payment",
        sender: "office@education-grant-fund.net",
        text: "You have been approved for an international scholarship payment. To process the transfer, send your passport photo, address, and bank information today.",
        type: "scam"
    },
    {
        subject: "Unpaid Toll Notice",
        sender: "billing@road-fees-department.co",
        text: "Our records show that you have an unpaid toll fee. Pay the outstanding amount within 12 hours to avoid penalty charges and legal action.",
        type: "scam"
    },
    {
        subject: "Your Social Media Account Will Be Deleted",
        sender: "team@insta-security-center.net",
        text: "Your account has violated our community standards and will be removed today unless you verify your identity by logging in through the link below.",
        type: "scam"
    },
    {
        subject: "Important Payroll Update",
        sender: "hr@company-payroll-check.com",
        text: "We need all employees to reconfirm their payroll details before salaries are processed. Please reply with your full name, bank number, and online banking password.",
        type: "scam"
    },
    {
        subject: "You Have 1 New Secure Document",
        sender: "docs@onedrive-securefiles.net",
        text: "A confidential file has been shared with you. To open it, sign in with your email address and password using the secure viewer below.",
        type: "scam"
    },
    {
        subject: "Immediate Action Required on Your Account",
        sender: "service@apple-id-recovery-help.com",
        text: "Your Apple ID has been locked for security reasons. Restore access immediately by confirming your payment and login information.",
        type: "scam"
    },
    {
        subject: "Charity Donation Confirmation Needed",
        sender: "help@global-child-support-fund.org",
        text: "Thank you for your recent donation. We could not confirm your card details. Please resubmit your card number and security code to complete the donation.",
        type: "scam"
    },
    {
        subject: "Job Offer: Work From Home and Earn $500 Daily",
        sender: "recruitment@easycashremotejobs.net",
        text: "We reviewed your profile and selected you for a high-paying remote position. No experience needed. Reply with your full personal details and ID photo to begin today.",
        type: "scam"
    },
    {
        subject: "Security Alert From Your University",
        sender: "itdesk@student-access-update.com",
        text: "Your student portal has been temporarily limited. To restore access, confirm your student login, password, and recovery email using the link below.",
        type: "scam"
    },
    {
        subject: "Crypto Investment Opportunity",
        sender: "advisor@btc-growth-platform.co",
        text: "A limited crypto opportunity is available only today. Invest now and double your money within 48 hours. Minimum deposit required: $250.",
        type: "scam"
    },
    {
        subject: "Inbox Storage Full",
        sender: "mail@cloud-storage-upgrade.net",
        text: "Your inbox has reached 99% capacity. If you do not verify your account now, all incoming emails will be rejected.",
        type: "scam"
    },
    {
        subject: "Confirm Attendance to Receive Gift Card",
        sender: "events@amazon-loyalty-promo.com",
        text: "You were selected to receive a $100 gift card for being a loyal customer. Confirm your account details now to reserve your reward.",
        type: "scam"
    },
    {
        subject: "Emergency Help Needed",
        sender: "john.smith.travelmail@gmail.com",
        text: "Hi, I am traveling and my wallet was stolen. I need you to send money urgently so I can return home. Please do not call because my phone is not working right now.",
        type: "scam"
    },

    {
        subject: "Your Order Has Been Shipped",
        sender: "no-reply@amazon.com",
        text: "Good news. Your order has been shipped and is expected to arrive on Tuesday. You can track your package in your account page.",
        type: "normal"
    },
    {
        subject: "Class Schedule Update",
        sender: "administration@college.edu",
        text: "Hello students, tomorrow's programming class will start at 10:00 instead of 09:00 due to a room change. Please check the school portal for the updated schedule.",
        type: "normal"
    },
    {
        subject: "Meeting Reminder",
        sender: "calendar@google.com",
        text: "This is a reminder for your meeting tomorrow at 14:00. The meeting link and details are available in your calendar.",
        type: "normal"
    },
    {
        subject: "Welcome to Netflix",
        sender: "info@account.netflix.com",
        text: "Thanks for joining Netflix. Your membership is now active. You can start watching on any supported device.",
        type: "normal"
    },
    {
        subject: "Receipt for Your Purchase",
        sender: "receipt@store.steampowered.com",
        text: "Thank you for your purchase. This email confirms your payment and includes your receipt for the items you bought today.",
        type: "normal"
    },
    {
        subject: "Password Changed Successfully",
        sender: "no-reply@accounts.google.com",
        text: "Your password was changed successfully. If you made this change, no further action is needed. If not, review your account security settings.",
        type: "normal"
    },
    {
        subject: "Interview Invitation",
        sender: "recruitment@techcompany.com",
        text: "Thank you for applying. We would like to invite you to an online interview next week. Please reply with your availability.",
        type: "normal"
    },
    {
        subject: "Your Food Delivery Is On the Way",
        sender: "updates@ubereats.com",
        text: "Your order is being prepared and will arrive in approximately 25 minutes. You can follow the delivery status in the app.",
        type: "normal"
    },
    {
        subject: "Library Book Reminder",
        sender: "notifications@citylibrary.nl",
        text: "This is a reminder that your borrowed book is due in three days. You can renew it online if needed.",
        type: "normal"
    },
    {
        subject: "Team Project Files",
        sender: "emma.wilson@schoolmail.edu",
        text: "Hi, I uploaded the presentation and notes for our project to the shared folder. Please check them before tomorrow's lesson.",
        type: "normal"
    },
    {
        subject: "Appointment Confirmation",
        sender: "appointments@dentalclinic.nl",
        text: "Your dental appointment has been confirmed for Monday at 11:30. If you need to cancel, please contact us at least 24 hours in advance.",
        type: "normal"
    },
    {
        subject: "Monthly Bank Statement Ready",
        sender: "service@bank.nl",
        text: "Your monthly bank statement is now available in your secure online banking environment. Log in through the official app or website to view it.",
        type: "normal"
    },
    {
        subject: "Software Update Available",
        sender: "noreply@adobe.com",
        text: "A new software update is available for your application. This update includes bug fixes, performance improvements, and security updates.",
        type: "normal"
    },
    {
        subject: "Flight Check-In Open",
        sender: "no-reply@klm.com",
        text: "Online check-in for your upcoming flight is now open. You can select your seat and download your boarding pass.",
        type: "normal"
    },
    {
        subject: "Your Subscription Has Been Renewed",
        sender: "billing@spotify.com",
        text: "Your Premium subscription has been successfully renewed. Your next billing date is shown in your account settings.",
        type: "normal"
    },
    {
        subject: "Course Enrollment Confirmed",
        sender: "courses@onlinelearning.com",
        text: "You have successfully enrolled in the JavaScript Basics course. Your lessons are now available on your dashboard.",
        type: "normal"
    },
    {
        subject: "Support Ticket Update",
        sender: "support@discord.com",
        text: "We have received your support request and added a new reply to your ticket. Please log in to your account to continue.",
        type: "normal"
    },
    {
        subject: "Gym Membership Reminder",
        sender: "info@fitcenter.nl",
        text: "Your gym membership will renew automatically on May 1. You can manage your subscription in the member portal.",
        type: "normal"
    },
    {
        subject: "New Comment on Your Document",
        sender: "docs-noreply@google.com",
        text: "A collaborator added a new comment to your shared document. Open the document to review and respond.",
        type: "normal"
    },
    {
        subject: "Thanks for Contacting Customer Service",
        sender: "support@ikea.com",
        text: "We received your message and created a support case. One of our team members will reply as soon as possible.",
        type: "normal"
    }
];