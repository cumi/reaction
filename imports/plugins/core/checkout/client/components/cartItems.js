import React, { PropTypes } from "react";

const CartItems = ({ handleLowInventory, pdpPath, handleImage, handleRemoveItem, items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="cart-items" key={item._id} style={{ display: "inline-block" }}>
            <i className="remove-cart-item fa fa-times fa-lg"
              data-target={item._id}
              onClick={handleRemoveItem}
            />
            <a href={pdpPath(item)}
              data-event-action="product-click"
              data-event-value={item.productId}
            >
              {handleImage(item) ?
                <div className="center-cropped" style={{ backgroundImage: `url(${handleImage(item).url({ store: "small" })})` }}>
                  <img src={handleImage(item).url({ store: "small" })} className="product-grid-item-images img-responsive" />
                </div> :
                <div className="center-cropped" style={{ backgroundImage: "url('/resources/placeholder.gif')" }}>
                  <img src="/resources/placeholder.gif" className="product-grid-item-images img-responsive" />
                </div>
              }
            </a>
            <div className="cart-labels">
              {handleLowInventory(item) ?
              <div className="badge badge-low-inv-warning"
                title={item.variants.inventoryQuantity}
                data-i18n="cartDrawerItems.left"
              >!</div> :
            <div>
            <span className="badge">{item.quantity}</span>
            <span className="cart-item-title">
              {item.title}
              <small>{item.variants.title}</small>
            </span>
            </div>
             }
            </div>
          </div>
        );
      })}
    </div>
  );
};

CartItems.propTypes = {
  handleImage: PropTypes.func,
  handleLowInventory: PropTypes.func,
  handleRemoveItem: PropTypes.func,
  items: PropTypes.array,
  pdpPath: PropTypes.func
};

export default CartItems;
