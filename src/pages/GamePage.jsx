import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../service/api";
import GameDetailsCard from "../componet/GameDetailsCard ";
import ReviewSection from "../componet/ReviewSection"
import CommentSection from "../componet/CommentSection";
const GameDetails = () => {

    const { id } = useParams();

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
useEffect(() => {

    const fetchGame = async () => {

        try {

            const data = await getGameById(id);

            console.log("GAME DATA:", data);

            if (data.success) {
                setGame(data.game);
            }

        } catch (error) {

            console.log("Error:", error);

        } finally {

            setLoading(false);

        }
    };

    fetchGame();

}, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }


    if (!game) {
        return <div>Game not found</div>;
    }


    return (
       <div className="w-full space-y-8 px-4 py-6">
    <GameDetailsCard game={game} />
    <ReviewSection gameId={id} />
    <CommentSection gameId={id} />
</div>
    );
};

export default GameDetails;