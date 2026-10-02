import { useEffect, useState } from "react";
import { addReview, getReviews } from "../service/api";

const ReviewSection = ({ gameId }) => {
    const [selectedReview, setSelectedReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const reviewOptions = [
        {
            value: "perfection",
            label: "Perfection",
            emoji: "🔥",
        },
        {
            value: "go for it",
            label: "Go for it",
            emoji: "👍",
        },
        {
            value: "time-pass",
            label: "Time-pass",
            emoji: "😐",
        },
        {
            value: "skip",
            label: "Skip",
            emoji: "❌",
        },
    ];

    // ================= GET REVIEWS =================

    const fetchReviews = async () => {
        const data = await getReviews(gameId);

        if (data) {
            setReviews(data);
        }
    };

    useEffect(() => {
        if (gameId) {
            fetchReviews();
        }
    }, [gameId]);


    // ================= GET COUNT =================

    const getReviewCount = (value) => {
        const review = reviews.find(
            (item) => item._id === value
        );

        return review ? review.count : 0;
    };


    // ================= TOTAL REVIEWS =================

    const totalReviews = reviews.reduce(
        (total, item) => total + item.count,
        0
    );


    // ================= GET PERCENTAGE =================

    const getPercentage = (value) => {
        if (totalReviews === 0) {
            return 0;
        }

        return Math.round(
            (getReviewCount(value) / totalReviews) * 100
        );
    };


    // ================= DONUT VALUES =================

    const perfectionPercentage =
        getPercentage("perfection");

    const goForItPercentage =
        getPercentage("go for it");

    const timePassPercentage =
        getPercentage("time-pass");

    const perfectionEnd =
        perfectionPercentage;

    const goForItEnd =
        perfectionPercentage + goForItPercentage;

    const timePassEnd =
        perfectionPercentage +
        goForItPercentage +
        timePassPercentage;


    // ================= SUBMIT REVIEW =================

    const handleSubmit = async () => {
        if (!selectedReview) {
            return;
        }

        try {
            setLoading(true);

            const data = await addReview(
                gameId,
                selectedReview
            );

            if (data) {
                setSelectedReview("");

                // Get updated reviews
                await fetchReviews();
            }

        } catch (error) {
            console.log("Review submit error:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* ================= REVIEW CHART ================= */}

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-xl font-semibold text-white">
                        Community Reviews
                    </h2>

                    <span className="text-sm text-slate-400">
                        {totalReviews} reviews
                    </span>

                </div>


                <div className="flex flex-col items-center gap-6 md:flex-row">

                    {/* ================= DONUT ================= */}

                    <div
                        className="relative h-48 w-48 shrink-0 rounded-full"
                        style={{
                            background:
                                `conic-gradient(
                                    #22c55e 0% ${perfectionEnd}%,
                                    #3b82f6 ${perfectionEnd}% ${goForItEnd}%,
                                    #f59e0b ${goForItEnd}% ${timePassEnd}%,
                                    #ef4444 ${timePassEnd}% 100%
                                )`,
                        }}
                    >

                        {/* Inner Circle */}

                        <div className="absolute inset-[25%] flex flex-col items-center justify-center rounded-full bg-slate-900">

                            <span className="text-2xl font-bold text-white">
                                {totalReviews}
                            </span>

                            <span className="text-xs text-slate-400">
                                Total Reviews
                            </span>

                        </div>

                    </div>


                    {/* ================= LEGEND ================= */}

                    <div className="w-full space-y-3">

                        {reviewOptions.map((option) => (

                            <div
                                key={option.value}
                                className="flex items-center justify-between border-b border-slate-800 pb-2"
                            >

                                <div className="flex items-center gap-2">

                                    <span
                                        className={`h-3 w-3 rounded-full ${
                                            option.value === "perfection"
                                                ? "bg-green-500"
                                                : option.value === "go for it"
                                                ? "bg-blue-500"
                                                : option.value === "time-pass"
                                                ? "bg-yellow-500"
                                                : "bg-red-500"
                                        }`}
                                    />

                                    <span className="text-sm text-slate-300">
                                        {option.label}
                                    </span>

                                </div>


                                <span className="text-sm text-slate-400">

                                    {getPercentage(option.value)}%

                                    {" "}

                                    ({getReviewCount(option.value)})

                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </div>


            {/* ================= GIVE REVIEW ================= */}

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

                <h2 className="text-xl font-semibold text-white">
                    What do you think about this game?
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    Select one option
                </p>


                {/* ================= OPTIONS ================= */}

                <div className="mt-5 space-y-3">

                    {reviewOptions.map((option) => {

                        const isSelected =
                            selectedReview === option.value;

                        return (

                            <button
                                key={option.value}
                                onClick={() =>
                                    setSelectedReview(option.value)
                                }
                                className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition ${
                                    isSelected
                                        ? "border-blue-500 bg-blue-500/10"
                                        : "border-slate-700 bg-slate-800/40 hover:border-slate-500"
                                }`}
                            >

                                <div className="flex items-center gap-4">

                                    <span className="text-2xl">
                                        {option.emoji}
                                    </span>

                                    <div>

                                        <p className="font-medium text-white">
                                            {option.label}
                                        </p>

                                        <p className="text-xs text-slate-400">

                                            {option.value === "perfection" &&
                                                "Best experience!"}

                                            {option.value === "go for it" &&
                                                "Worth playing"}

                                            {option.value === "time-pass" &&
                                                "It's okay"}

                                            {option.value === "skip" &&
                                                "Not recommended"}

                                        </p>

                                    </div>

                                </div>


                                {/* ================= SELECTION CIRCLE ================= */}

                                <div
                                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                        isSelected
                                            ? "border-blue-500 bg-blue-500"
                                            : "border-slate-500"
                                    }`}
                                >

                                    {isSelected && (
                                        <span className="text-xs text-white">
                                            ✓
                                        </span>
                                    )}

                                </div>

                            </button>

                        );
                    })}

                </div>


                {/* ================= SUBMIT ================= */}

                <button
                    onClick={handleSubmit}
                    disabled={!selectedReview || loading}
                    className="mt-5 w-full rounded-lg bg-red-500 py-3 font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                >

                    {loading
                        ? "Submitting..."
                        : "Submit Review"}

                </button>

            </div>

        </section>
    );
};

export default ReviewSection;