import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getRepos = this.getRepos.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);

    $.ajax({
      method: "POST",
      headers: {
        'username' : term
      },
      url: "/repos",
      data: term,
      dataType: 'text',
      success: (response, textStatus, jqXHR) => this.getRepos(),
      error: (jqXHR, textStatus, errorThrown) => alert(textStatus, errorThrown)
    })

  }

  getRepos() {
    console.log('called!!')
    $.ajax({
      method: "GET",
      url: "/repos",
      success: (response, textStatus, jqXHR) => this.setState({ repos: response }),
      error: (jqXHR, textStatus, errorThrown) => alert(textStatus, errorThrown)
    })
  }

  componentDidMount() {
    this.getRepos();
  }

  render () {

    return (<div style={{ textAlignVertical: "center", textAlign: "center", }}>
      <h1 >Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)} />
      <RepoList repos={this.state.repos} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));