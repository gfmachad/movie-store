import React from 'react'
import { MdFavorite } from 'react-icons/md'
import { IoMdCart } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'

import '../NavBar/styles.css'

const NavBar: React.FC = () => {
	return (
		<main className='navbar-wrapper'>
			<section className='container'>
				<span>LOGO</span>
				<div className='input-search'>
					<div className='search-container'>
						<input
							type='text'
							className='search-box'
							id='search'
							placeholder='Pesquisa'
						/>
						<BsSearch color='#4b5c6b' className='search-button' />
					</div>
				</div>
				<div className='input-buttons'>
					<MdFavorite />
					<IoMdCart />
				</div>
			</section>
		</main>
	)
}

export default NavBar
