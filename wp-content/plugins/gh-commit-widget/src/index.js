import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

const blockStyle = {
    backgroundColor: '#008710',
    color: '#fff',
    padding: '20px',
};

registerBlockType( 'kokkieh/github-commit-block', {
    title: 'GH Commit Block',
    icon: 'smiley',
    category: 'development',
    edit() {
        const blockProps = useBlockProps( { style: blockStyle } );
 
        return (
            <div { ...blockProps }>Hello World (from the editor).</div>
        );
    },
    
} );