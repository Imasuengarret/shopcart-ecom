import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader({title, currentPage}) {
  return (
    <div className='pageheader-section'>
      <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='pageheader-content text-center'>
                    <h3>{title}</h3>
                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb justify-content-center'>
                            <li className='breadcrumb-item'><Link to={`/`}>Home</Link></li>
                            <li className='breadcrumb-item active' aria-current="page">{currentPage}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
