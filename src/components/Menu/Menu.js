import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


import Image1 from '../../Images/Image1.jpg'
import Image2 from '../../Images/Image2.jpg'
import Image3 from '../../Images/Image3.jpg'
import Image4 from '../../Images/Image4.jpg'
import Image5 from '../../Images/Image5.jpg'
import Image6 from '../../Images/Image6.jpg'
import Image7 from '../../Images/Image7.jpg'
import Image8 from '../../Images/Image8.jpg'
import Image9 from '../../Images/Image9.jpg'
import Image10 from '../../Images/Image10.jpg'

const useStyles = makeStyles((theme) => ({
    gridList: {
      paddingTop: 30,
      width: 900,
      height: 1000, 
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  const tileData = [
    {
     img: Image1,
     title: 'Item1'
    },
    {
        img: Image2,
        title: 'Item'
       },
       {
        img: Image3,
        title: 'Item3'
       },
       {
        img: Image4,
        title: 'Item4'
       },
       {
        img: Image5,
        title: 'Item5'
       },
       {
        img: Image6,
        title: 'Item6'
       },
       {
        img: Image7,
        title: 'Item7'
       },
       {
        img: Image8,
        title: 'Item8'
       },
       {
        img: Image9,
        title: 'Item9'
       },
       {
        img: Image10,
        title: 'Item10'
       },
    ];

export default function Menu() {
    const classes = useStyles();
    return (
        <div style={{ justifyContent: 'space-around', display: 'flex',flexWrap: 'wrap' }}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                </GridListTile>
                {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                    title={tile.title}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
    )
}
