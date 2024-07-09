'use server';

import React from 'react';
import EmailTemplate from '@/email/email-template';
import { Resend } from 'resend';
import { getErrorMessage } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false;
    }
    return true;
}

export const sendEmail = async (formData: FormData) => {

    const message = formData.get('message');
    const senderEmail = formData.get('senderEmail');

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email',
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message',
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: '2d0r Contact Form <onboarding@resend.dev>',
            to: ['tudor.m.p@outlook.com'],
            subject: 'Message from 2d0r.github.io contact form',
            reply_to: senderEmail as string,
            react: EmailTemplate({
                message: message as string,
                senderEmail: senderEmail as string,
            }) as React.ReactElement,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }

    return {
        data,
    };
    
}