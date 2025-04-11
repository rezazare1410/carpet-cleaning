const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

// اطلاعات SMTP خودت رو اینجا بذار (مثلاً Gmail یا Zoho)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'reza.zare1410@gmail.com',
    pass: 'wrbg wsdm oyhu nmww',
  },
});

// تابع Cloud Function
exports.sendEmailOnNewComment = functions.firestore
  .document('comments/{commentId}')
  .onCreate(async (snap, context) => {
    const comment = snap.data();

    const mailOptions = {
      from: '"Zare Carpet" <YOUR_EMAIL@gmail.com>',
      to: 'reza.zare1410@gmail.com', // ایمیلی که می‌خوای نوتیفیکیشن بگیره
      subject: `💬 نظر جدید در پست: ${comment.postSlug}`,
      html: `
        <h3>👤 ${comment.name}</h3>
        <p>${comment.message}</p>
        <hr />
        <small>پست مربوطه: ${comment.postSlug}</small>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('✅ ایمیل ارسال شد');
    } catch (error) {
      console.error('❌ خطا در ارسال ایمیل:', error);
    }
  });
