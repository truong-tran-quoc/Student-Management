import { Box, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    border: "1px solid rgba(0,0,0,0.08)"
  },

}))

export interface StatisticItemProps {
    icon: React.ReactElement
    label: String
    value: string | number
}

export default function StatisticItem({icon, label, value}: StatisticItemProps) {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Box>
        {icon}
      </Box>
      <Box>
        <Typography variant='h5' align='right'>{value}</Typography>
        <Typography variant='caption'>{label}</Typography>
      </Box>
    </Paper>
)}