import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExersies = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant='h3' mb={5}> Esercises that target same muscle group </Typography>
            <Stack direction='row' sx={{p:'2',position:'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
            </Stack>
            <Typography variant='h3' mb={5}> Esercises that target same equipment </Typography>
            <Stack direction='row' sx={{p:'2',position:'relative'}}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
            </Stack>
            
        </Box>
    )
}

export default SimilarExersies