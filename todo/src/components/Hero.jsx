import React from "react";

export default function Hero({ completed, total }) {
    return (
        <section className="todoHeroSection">
            <div>
                <h2>Task Done</h2>
                <p>Keep it up!</p>
            </div>
            <div>
                {completed}/{total}
            </div>
        </section>
    );
}
