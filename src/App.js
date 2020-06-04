import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Header from './components/Header.js'
import CustomNav from './components/CustomNav.js'
import Jumbo from './components/Jumbo.js'
import About from './components/About.js'
import Jobs from './components/Jobs.js'
import AllJobs from './components/AllJobs.js'
import Newsletter from './components/Newsletter.js'
import Footer from './components/Footer.js'



class App extends Component {
	constructor() {
        super()
        this.state = {
			isNavOpen: false,
			seeAllJobs: false,
			search: ''
        }
		this.toggleNav = this.toggleNav.bind(this)
		this.toggleAllJobs = this.toggleAllJobs.bind(this)

	}
	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		})
	}
	toggleAllJobs() {
		this.setState({
			seeAllJobs: !this.state.seeAllJobs
		})
	}

	render() {
		return (
			<Container>
				<Header toggleNav={this.toggleNav}/>
				{this.state.isNavOpen === true ? <CustomNav /> : null}
				{this.state.isNavOpen === false && this.state.seeAllJobs === false ? <Jumbo /> : null}
				{this.state.isNavOpen === false && this.state.seeAllJobs === false ? <About /> : null}
				{this.state.isNavOpen === false && this.state.seeAllJobs === false  ? <Jobs toggleAllJobs={this.toggleAllJobs}/> : null}
				{this.state.seeAllJobs === true ? <AllJobs toggleAllJobs={this.toggleAllJobs}/> : null}
				{this.state.isNavOpen === false && this.state.seeAllJobs === false  ? <Newsletter /> : null}
				<Footer />
			</Container>
		);
	}
}

export default App
