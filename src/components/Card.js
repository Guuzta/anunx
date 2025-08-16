import {
    Card as CardMUI,
    CardActions,
    CardMedia,
    CardContent,
    Typography
} from "@mui/material"

const Card = ({ actions, image, title, subtitle }) => {
    return (
        <CardMUI sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                    ? (
                        <CardActions>
                            {actions}
                        </CardActions>
                    ) : null
            }
        </CardMUI>
    )
}

export default Card