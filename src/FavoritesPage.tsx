import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { Post } from "./Post";
import { GetFavorites } from "./UpdateFavorites";
import { RedditResponse } from "./SearchPage";
import { useNavigate } from "react-router-dom";

export function FavoritesPage(){

    const [results, setResults] = React.useState<RedditResponse>();
    const [favorites, setFavorites] = React.useState(GetFavorites() ?? [""]);
    React.useEffect(() => {
        if(favorites.length > 0){
            fetch(`https://www.reddit.com/by_id/${favorites}.json`,
            {
        
            }).then((res) => res.json())
            .then((json: RedditResponse) => {
                setResults(json)
            })
        }
    }, [])

    const navigate = useNavigate();
    
    if(favorites.length === 0){
        return (
            <Stack alignItems={"center"}>
                <Typography variant="h4">You have no favorites!</Typography>
                <Button variant="contained"
                    onClick={() => navigate("/search")}
                >Back to search
                </Button>
            </Stack>
        )
    }


    

    return (
        <Stack spacing={2}>
        <Button onClick={() => navigate("/search")}>Go to Search</Button>
        {results?.data.children.map(( post ) => {
            const fav = favorites?.findIndex((str) => str === post.data.name) === -1 ? false : true
            return <Post key={post.data.name} {...post.data} favorite={fav} setFavorites={setFavorites}></Post>
        })}
        </Stack>
    );
}