import {TextField, Grid, Button} from "@mui/material"
import React from "react";

type searchProps = {
    searchFunction: (subreddit: string) => void
}

export function Search({searchFunction}:searchProps){

    const [subreddit, setSubreddit] = React.useState<string>("");

    return (
    <Grid container spacing={1}>
        <Grid item xs={10}>
            <TextField value={subreddit} onChange={(event) => setSubreddit(event.target.value)} onKeyDown={(event) => {
                if(event.key === "Enter"){
                    searchFunction(subreddit)
                }
            }}
            fullWidth
            placeholder="Enter Subreddit name"/>
        </Grid>
        <Grid item xs={2} alignItems="center">
            <Button variant="contained" onClick={() => searchFunction(subreddit)}>Search</Button>
        </Grid>
    </Grid>
    );
}