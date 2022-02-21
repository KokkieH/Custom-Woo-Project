import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

const blockStyle = {
    backgroundColor: '#008710',
    color: '#fff',
    padding: '20px',
};

registerBlockType( 'kokkieh/gh-commit-block', {
    edit: function () {
        const blockProps = useBlockProps( { style: blockStyle } );
        return <div { ...blockProps }>Hello World (from the editor).</div>;
    },
    save: function () {
        return <div>Hello World (from the frontend).</div>;
    },
} );