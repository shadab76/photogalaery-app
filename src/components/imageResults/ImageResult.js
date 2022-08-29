import React,{Component} from 'react'
import PropsTypes from 'prop-types';
import { GridList } from 'material-ui';
import GridTile from 'material-ui/GridList/GridTile';
import IconButton from 'material-ui/IconButton';
import { ActionZoomIn } from 'material-ui/svg-icons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResult extends Component {

    state = {
        open:false,
        currentImg: ''
    }
    handleOpen = (img) => {
        this.setState({open:true,currentImg:img})
    }
    handleClose = () => {
        this.setState({open:false})
    }
    download = (img) => {
        this.setState({currentImg:img})
    }
    render() {
        let imageListContent;
        const { images } = this.props;

        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {
                        images.map(img => (
                            <GridTile
                                title={img.tags}
                                key={img.id}
                                subtitle={
                                    <span>by <strong>{img.user}</strong></span>
                                }
                                actionIcon={
                                    <IconButton onClick={() => this.handleOpen(img.largeImageURL)}> 
                                        <ActionZoomIn color='white' />
                                    </IconButton>
                                }
                                
                            >
                                <img src={img.largeImageURL} style={{maxWidth:'100%'}} alt="" />
                            </GridTile>
                        ))
                    }
                </GridList>
            )
        } else {
            imageListContent = null;
        }

        const action = [
            <FlatButton label="close" primary={true} onClick={this.handleClose}/>,
             <FlatButton label="downlord" primary={true} onClick={this.download}/>
        ]

        return (
            <div>
                {imageListContent}
                <Dialog
                    actions={action}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.currentImg} alt="" />
                </Dialog>
            </div>
        )
    }
}
ImageResult.PropsTypes = {
    images: PropsTypes.array.isRequired
}

export default ImageResult;