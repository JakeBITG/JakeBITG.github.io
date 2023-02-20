import React from "react";
import { Search } from "./Search";
import { Stack, Button } from "@mui/material";
import { Post } from "./Post";
import { GetFavorites } from "./UpdateFavorites";
import { useNavigate } from "react-router-dom";

export type RedditPost = {
    data: {
        permalink: string,
        title: string,
        score: number,
        name: string
    }
}

export type RedditResponse = {
    data: {
        children: [RedditPost]
    }
}

export function SearchPage(){

    const [results, setResults] = React.useState<RedditResponse>();
    const [favorites, setFavorites] = React.useState(GetFavorites() ?? [""])
    const nav = useNavigate();

    const searchFunction = (subreddit: string) => {
        fetch(`https://www.reddit.com/r/${subreddit}.json?limit=10`,
        {

        }).then((res) => res.json())
        .then((json: RedditResponse) => {
            setResults(json)
        })

    }

    return (
        <Stack spacing={2}>
            <Button onClick={() => nav("/favorites")}>Go to Favorites</Button>
            <Search searchFunction={searchFunction}/>
            <Stack spacing={2}>
            {results?.data.children.map(( post ) => {
                const fav = favorites?.findIndex((str) => str === post.data.name) === -1 ? false : true
                return <Post key={post.data.name} {...post.data} favorite={fav} setFavorites={setFavorites}></Post>
            })}
            </Stack>
        </Stack>


    );
}