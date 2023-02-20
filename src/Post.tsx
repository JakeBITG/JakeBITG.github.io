import { Paper, Grid, Typography, Chip, Badge } from "@mui/material";
import React from "react";
import { OpenComments } from "./OpenRedditComments";
import { RedditPost } from "./SearchPage";
import { GetFavorites, UpdateFavorites, UpdateFavProps } from "./UpdateFavorites";

type post = RedditPost["data"] & {favorite:boolean, setFavorites: React.Dispatch<string[]>}

export function Post({name, permalink, score, title, favorite, setFavorites}:post){

    const updateFavs = React.useCallback(({operation, name}:UpdateFavProps) => {
        UpdateFavorites({operation, name})
        setFavorites(GetFavorites() ?? [""])
    }, [setFavorites])

    return (
        <Paper elevation={2}>
            <Grid container>
                <Grid item xs={12} padding={2}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={4} padding={1}>
                    <Chip label="Open comments" onClick={() => OpenComments(permalink)}></Chip>
                </Grid>
                <Grid item xs={4} padding={1}>
                    <Badge badgeContent={String(score)} color="info" overlap="rectangular">
                        <Chip label="Score"></Chip>
                    </Badge>
                </Grid>
                <Grid item xs={4} padding={1}>
                    {favorite
                        ? <Chip label="Remove from Favorites" onClick={() => updateFavs({operation: "remove", name})}></Chip>
                        : <Chip label="Add to Favorites" onClick={() => updateFavs({operation: "add", name})}></Chip>
                    }
                </Grid>
            </Grid>
        </Paper>
    )
}