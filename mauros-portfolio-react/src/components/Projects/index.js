import './index.scss';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Piuno from '../../assets/images/pi_uno.jpg';
import Pidos from '../../assets/images/pi_dos.jpg';
import Pitres from '../../assets/images/pi_tres.jpg';
import Pfuno from '../../assets/images/pf_uno.jpg';
import Pfdos from '../../assets/images/pf_dos.jpg';
import Pftres from '../../assets/images/pf_tres.jpg';
import Pfcuatro from '../../assets/images/pf_cuatro.jpg';
import Pfcinco from '../../assets/images/pf_cinco.jpg';
import Pfseis from '../../assets/images/pf_seis.jpg';
import Pitresb from '../../assets/images/pi_tres_b.jpg';
import StudioPayments from '../../assets/images/Studio_payments.jpg';
import TwlConfigutaions from '../../assets/images/twl_configutaions.jpg';
import TwlPlatfroms from '../../assets/images/twl_platfroms.jpg';
import TwlTarifas from '../../assets/images/twl_tarifas.jpg';




class DemoCarousel extends Component {
    render() {
        return (
            <div className='container projects-page'>

            <Carousel showThumbs={false} showArrows={true}  infiniteLoop={true}>
                <div>
                    <img src={Piuno} alt='piuno'/>
                    <p className="legend">Landing - Individual - Project</p>
                </div>
                <div>
                    <img src={Pidos} alt='pidos' />
                    <p className="legend">Home - Individual - Project</p>
                </div>
                <div>
                    <img src={Pitres} alt='pitres' />
                    <p className="legend">Component - Breed Detail</p>
                </div>
                <div>
                    <img src={Pitresb} alt='pitresb' />
                    <p className="legend">Component - Create Breed</p>
                </div>
                <div>
                    <img src={Pfuno} alt='Pfuno'/>
                    <p className="legend">Home - Final - Project</p>
                </div>
                <div>
                    <img src={Pfdos} alt='Pfdos' />
                    <p className="legend">Products - Final - Project</p>
                </div>
                <div>
                    <img src={Pftres} alt='Pftres' />
                    <p className="legend">Admin - Final - Project</p>
                </div>
                <div>
                    <img src={Pfcuatro} alt='Pfcuatro'/>
                    <p className="legend">Favorites - Final - Project</p>
                </div>
                <div>
                    <img src={Pfcinco} alt='Pfcinco' />
                    <p className="legend">Shopping Cart - Final - Project</p>
                </div>
                <div>
                    <img src={Pfseis} alt='Pfseis' />
                    <p className="legend">Product - Final - Project</p>
                </div>
                <div>
                    <img src={StudioPayments} alt='StudioPayments' />
                    <p className="legend">Studio - Payments</p>
                </div>
                <div>
                    <img src={TwlConfigutaions} alt='TwlConfigutaions' />
                    <p className="legend">TWL - Configurations</p>
                </div>
                <div>
                    <img src={TwlPlatfroms} alt='TwlPlatfroms' />
                    <p className="legend">TWL - Platforms</p>
                </div>
                <div>
                    <img src={TwlTarifas} alt='TwlTarifas' />
                    <p className="legend">TWL - Tarifas</p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;
