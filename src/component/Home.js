import React, { useState } from 'react';
import '../App.css'
import IMG1 from '../component/images/c.png'
import IMG2 from '../component/images/c++.png'
import IMG3 from '../component/images/java.png'
import IMG4 from '../component/images/react.png'
import IMG5 from '../component/images/firebase.png'
import IMG6 from '../component/images/python.png'
import IMG7 from '../component/images/go.png'
import IMG8 from '../component/images/mysql.png'
import IMG9 from '../component/images/node.png'
import IMG10 from '../component/images/express.png'
import IMG11 from '../component/images/css.png'
import IMG12 from '../component/images/linux.png'
import IMG13 from '../component/images/git.png'
export default function Content() {
    return (
        <div>
            <img src={IMG4} className="courcesType2" />
            <img src={IMG5} className="courcesType2" />
            <img src={IMG3} className="courcesType2" />
            <img src={IMG1} className="courcesType1" />
            <img src={IMG2} className="courcesType1" />
            <img src={IMG6} className="courcesType1" />
            <img src={IMG7} className="courcesType2" />
            <img src={IMG8} className="courcesType2" />
            <img src={IMG9} className="courcesType2" />
            <img src={IMG10} className="courcesType3" />
            <img src={IMG11} className="courcesType1" />
            <img src={IMG12} className="courcesType3" />
            <img src={IMG13} className="courcesType3" />
        </div >
    )
}

