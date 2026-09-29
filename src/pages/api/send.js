// import sendEmail from '../../sendEmail';

// export async function get({ request }) {
//   const url = new URL(request.url);
//   const to = url.searchParams.get('to');
//   const subject = url.searchParams.get('subject');
//   const text = url.searchParams.get('text');

//   if (!to || !subject || !text) {
//     return new Response('Missing parameters', { status: 400 });
//   }

//   try {
//     await sendEmail(to, subject, text);
//     return new Response('Email sent successfully', { status: 200 });
//   } catch (error) {
//     return new Response('Failed to send email', { status: 500 });
//   }
// }

import sendEmail from '../../../sendEmail';

export async function post({ request }) {
  try {
    const { to, subject, text } = await request.json();

    if (!to || !subject || !text) {
      return new Response('Missing parameters', { status: 400 });
    }

    await sendEmail(to, subject, text);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}