import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <a onClick={() => props.selectPage("profile")} className={"item" + (props.selectedItem === 'profile' ? " active" : "")} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={() => props.selectPage("photo")} className={"item" + (props.selectedItem === 'photo' ? " active" : "")}
      id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={() => props.selectPage("cocktail")} className={"item" + (props.selectedItem === 'cocktail' ? " active" : "")} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={() => props.selectPage("pokemon")} className={"item" + (props.selectedItem === "pokemon" ? " active" : "")} id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>

    </div>
  )

}

export default MenuBar
