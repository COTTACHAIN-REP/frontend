'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase'; // adjust path if needed
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function WaitlistPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Save email to Firestore
            await addDoc(collection(db, 'waitlist'), {
                email,
                createdAt: serverTimestamp(),
            });

            setMessage('Thank you for joining the waitlist!');
            setEmail('');
        } catch (error) {
            console.error('Error saving to waitlist:', error);
            setMessage('Something went wrong. Try again.');
        }

        setLoading(false);
    };

    return (
        <div
            style={{
                backgroundImage: 'url(/assests/images/golds-bg.svg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="min-h-screen flex items-center justify-center bg-black text-white px-4"
        >
            <div className="w-full max-w-md text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Join Our Waitlist</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full bg-white p-3 rounded-md text-black outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full p-3 rounded-md font-semibold ${loading
                                ? 'bg-amber-400 cursor-not-allowed'
                                : 'bg-[#D97706] hover:bg-amber-700'
                            }`}
                    >
                        {loading ? 'Joining...' : 'Join Waitlist'}
                    </button>
                </form>
                
                    {message &&
                    
                    <div className='bg-green-500 w-auto p-3 rounded-md mt-10'>
                        <p className="text-lg">{message}</p>
                    </div>
                    }
                
            </div>
        </div>
    );
}