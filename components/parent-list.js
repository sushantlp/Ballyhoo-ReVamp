import Search from "./search";
import MainList from "./main-list";
const ParentList = props => {
  return (
    <React.Fragment>
      <Search />

      <div class="columns">
 
  <div class="column is-3">Auto</div>
  <div class="column is-9"> <MainList /></div>
</div>

     
    </React.Fragment>
  );
};

export default ParentList;
