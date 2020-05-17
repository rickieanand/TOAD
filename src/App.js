import React, {useState, useEffect} from 'react';
import staticData from './data';
import './App.scss';

function App() {
	const data = [...staticData]
	const [cards, setCards] = useState([])
	const [myData, setMyData] = useState(data)
	useEffect(()=>{
		getRandomCards()
	}, [])


	const getRandomCards = () => {
		console.log('myData', myData)
		console.log('data', data)
		if(myData.length===0) {
			setMyData(data)
		}
		const temp = myData.sort(function() {
			return .5 - Math.random();
		}).splice(0, 5)
		console.log('temp', temp)
		//const temp = myData[Math.floor(Math.random() * myData.length)]
		setCards(temp)
	}


	console.log('cards', cards)

	return (
		<div className="App">
			
			<header className="header"> 
				<h1>ANATOMICAL TERMS</h1>
				<h2>THEIR ORIGIN AND DERIVATION</h2>
			</header>      
			<section className='card-section'>
				<div className='card-container'>
					{
						cards.length
						?
							cards.map((record, i) => {
								const bgColor = record?.type ? 'orange' : (record?.origin === 'Latin' ? 'red' : 'green')
								const id = record.id
								return (
									<div
										className='card'
										key={i}
										style={{background: bgColor}}
									>
										<h1>{record.term}</h1>
										<div className='derivation'>{record.derivation}</div>
									</div>
								)
							})
						:
							<div className='no-cards' onClick={getRandomCards}>
								Congratuations!!! You have read all the cards.
							</div>
					}
				</div>
			</section>
			<div className='random5' onClick={getRandomCards}>+5</div>
		</div>
	);
}

export default App;
