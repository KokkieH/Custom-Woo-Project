import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

const blockStyle = {
    backgroundColor: '#008710',
    color: '#fff',
    padding: '20px',
};

registerBlockType( 'kokkieh/gh-commit-block', {
    edit() {
        const blockProps = useBlockProps( { style: blockStyle } );
        
        return <div { ...blockProps }>Hello World (from the editor).</div>;
    },
    save() {
        const blockProps = useBlockProps.save( { style: blockStyle } );

        return <div { ...blockProps }>Hello World (from the frontend).</div>;
    },
} );