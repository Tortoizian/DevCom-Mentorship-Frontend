import React from "react";
import { useState } from "react";


const BookingSummary = function () {
    return (

        <>





            <div className="review-page">

                <div className="review-header">
                    Review your booking
                </div>

                <div className="review-card">

                    <div className="Container">

                        <div className="summary-card">
                            <div className="card-title">Booking Summary</div>

                            <div className="room-preview">
                                <img
                                    src="https://qph.cf2.quoracdn.net/main-qimg-2daa20af399291459f95b1c3a5d44633-lq"
                                    alt="room"
                                />
                            </div>

                            <div className="datetime-row">
                                <div>
                                    <strong>Date:</strong><br />
                                    Today, Jan 18, 2026
                                </div>

                                <div>
                                    <strong>Time:</strong><br />
                                    11:00 AM – 3:00 PM (4 Hours)
                                </div>
                            </div>

                            <div className="booked-for">
                                Booking for Maya Shetty (ID: 25B0831)
                            </div>
                        </div>

                        <div className="confirm-card">
                            <div className="card-title">Confirmation</div>

                            <div className="reminder">
                                <strong>Remember:</strong>
                                <p>
                                    Please arrive on time. Bookings are released
                                    20 minutes after no show. Keep noise to a minimum.
                                </p>
                            </div>

                            <div className="policy">
                                <input type="checkbox" />
                                <span>
                                    I agree to <a href="">Library Code of Conduct</a> and{" "}
                                    <a href="">Room Usage Policy</a>
                                </span>
                            </div>

                            <button className="continue-btn">Continue</button>
                            <button className="cancel-btn">Cancel and Go Back</button>
                        </div>

                    </div>

                </div>
            </div>




        </>






    );
}

export default BookingSummary;