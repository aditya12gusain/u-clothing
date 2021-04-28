import React from "react";

import MenuItem from "../../components/menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "hats",
          imageUrl:
            "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0752/6435/products/5_4899dbf3-45f0-4d8f-9553-ec238c780904.jpg?v=1607883046",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://static.highsnobiety.com/thumbor/ISICqvxvCNPvsy4f02VA9Clgf-4=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/09/04164648/custom-sneakers-good-bad-ugly-main.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://static.independent.co.uk/2021/03/10/11/iStock-1271243526.jpg?width=640&auto=webp&quality=75",
          id: 4,
          size: "large",
        },
        {
          title: "mens",
          imageUrl:
            "https://stylecaster.com/wp-content/uploads/2018/12/GettyImages-914704910-copy.jpg",
          id: 5,
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default Directory;
