const styles = theme => ({
    root: {
        // padding: theme.spacing.getSpacing(5, 0, 5)
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            // padding: theme.spacing.getSpacing(20, 0, 15)
        },
    }
})

export default styles;