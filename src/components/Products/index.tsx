import React from 'react'
import { MdFavorite } from 'react-icons/md'
import { BsStar } from 'react-icons/bs'

import '../Products/styles.css'

const Products: React.FC = () => {
	return (
		<main className='products-wrapper'>
			<section className='products-container'>
				<div className='products'>
					<div className='product'>
						<figure>
							<MdFavorite className='favorite' />
							<img
								className='product-image'
								src='https://www.themoviedb.org/t/p/original/6CRqvVSRTGF3yxULlPJDQonso9C.jpg'
								alt='SEE'
							/>
							<span className='movie-data'>17/09/2021</span>
						</figure>
						<div className='product-text'>
							<p className='product-name'>Nome do Filme</p>
							<span>
								<BsStar /> Gênero{' '}
							</span>
							<br />
							<span>R$ 79,99</span>
						</div>
						<button className='addButton'>Adicionar</button>
					</div>
				</div>
				<div className='products'>
					<div className='product'>
						<figure>
							<MdFavorite className='favorite' />
							<img
								className='product-image'
								src='https://www.themoviedb.org/t/p/original/6CRqvVSRTGF3yxULlPJDQonso9C.jpg'
								alt='SEE'
							/>
							<span className='movie-data'>17/09/2021</span>
						</figure>
						<div className='product-text'>
							<p className='product-name'>Nome do Filme</p>
							<span>
								<BsStar /> Gênero{' '}
							</span>
							<br />
							<span>R$ 79,99</span>
						</div>
						<button className='addButton'>Adicionar</button>
					</div>
				</div>
				<div className='products'>
					<div className='product'>
						<figure>
							<MdFavorite className='favorite' />
							<img
								className='product-image'
								src='https://www.themoviedb.org/t/p/original/6CRqvVSRTGF3yxULlPJDQonso9C.jpg'
								alt='SEE'
							/>
							<span className='movie-data'>17/09/2021</span>
						</figure>
						<div className='product-text'>
							<p className='product-name'>Nome do Filme</p>
							<span>
								<BsStar /> Gênero{' '}
							</span>
							<br />
							<span>R$ 79,99</span>
						</div>
						<button className='addButton'>Adicionar</button>
					</div>
				</div>
				<div className='products'>
					<div className='product'>
						<figure>
							<MdFavorite className='favorite' />
							<img
								className='product-image'
								src='https://www.themoviedb.org/t/p/original/6CRqvVSRTGF3yxULlPJDQonso9C.jpg'
								alt='SEE'
							/>
							<span className='movie-data'>17/09/2021</span>
						</figure>
						<div className='product-text'>
							<p className='product-name'>Nome do Filme</p>
							<span>
								<BsStar /> Gênero{' '}
							</span>
							<br />
							<span>R$ 79,99</span>
						</div>
						<button className='addButton'>Adicionar</button>
					</div>
				</div>
				<div className='products'>
					<div className='product'>
						<figure>
							<MdFavorite className='favorite' />
							<img
								className='product-image'
								src='https://www.themoviedb.org/t/p/original/6CRqvVSRTGF3yxULlPJDQonso9C.jpg'
								alt='SEE'
							/>
							<span className='movie-data'>17/09/2021</span>
						</figure>
						<div className='product-text'>
							<p className='product-name'>Nome do Filme</p>
							<span>
								<BsStar /> Gênero{' '}
							</span>
							<br />
							<span>R$ 79,99</span>
						</div>
						<button className='addButton'>Adicionar</button>
					</div>
				</div>
				<div className='products'>
					<div className='product'>
						<figure>
							<MdFavorite className='favorite' />
							<img
								className='product-image'
								src='https://www.themoviedb.org/t/p/original/6CRqvVSRTGF3yxULlPJDQonso9C.jpg'
								alt='SEE'
							/>
							<span className='movie-data'>17/09/2021</span>
						</figure>
						<div className='product-text'>
							<p className='product-name'>Nome do Filme</p>
							<span>
								<BsStar /> Gênero{' '}
							</span>
							<br />
							<span>R$ 79,99</span>
						</div>
						<button className='addButton'>Adicionar</button>
					</div>
				</div>
			</section>
		</main>
	)
}
export default Products
