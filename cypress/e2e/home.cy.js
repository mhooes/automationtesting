/// <reference types="Cypress" />

describe('Home page automation test', () => {
  beforeEach(() => {
    cy.viewport(1600, 900)
    cy.visit('https://practice.automationtesting.in');
    cy.title().should('contains', 'Automation Practice Site');
  });

      it('Home Page with three Sliders only', () => {
          cy.get('#n2-ss-6-align').find('.n2-ss-slide-fill').should('have.length', 3);
      });
  
    it('Home page with three Arrivals only', () => {
      cy.get('.module_row_1 > .row_inner_wrapper').find('.attachment-shop_catalog').should('have.length', 3);
    });
  
    it('Images in Arrivals should navigate', () => {
      cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
      cy.get('.single_add_to_cart_button').should('exist');
    });
  
    it('Arrivals-Images-Description', () => {
      cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
      cy.get('.single_add_to_cart_button').should('exist');
      cy.get('.woocommerce-tabs').find('.description_tab').should('have.class', 'active');
      cy.get('#tab-description').find('h2').should('have.text', 'Product Description');
    });
  
    it('Arrivals-Images-Reviews', () => {
      cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
      cy.get('.single_add_to_cart_button').should('exist');
      cy.get('.woocommerce-tabs').find('.reviews_tab').click().should('have.class', 'active');
      cy.get('#tab-reviews').find('h2').should('have.text', 'Reviews');
    });
  
    it('Arrivals-Images-Add to Basket', () => {
      cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
      cy.get('.single_add_to_cart_button').should('exist').click();
      cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
      cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item');    
    });
  
  it('Arrivals-Add to Basket with more books', () => {
    cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
    cy.get('.quantity').find('input').invoke('attr', 'max').then($max => {
      const max = parseInt($max) + 1;
      cy.get('.quantity').find('input').should('exist').clear().type(max);
      cy.get('.quantity').find('input').invoke('prop', 'validationMessage').should((value) => {
        expect(value).to.equal('Value must be less than or equal to ' + (max - 1) + '.');
      });

    })

  });

})