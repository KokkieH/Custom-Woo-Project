import { registerBlockType } from '@wordpress/blocks';
import {
        useBlockProps,
        InspectorControls,
} from '@wordpress/block-editor';
import {
        PanelBody, 
        TextControl,
} from '@wordpress/components';

registerBlockType( 'kokkieh/gh-commit-block', {
    attributes: {
        commitHash: {
            type: 'string',
        },
    },

    edit: ( { attributes, setAttributes } ) => {
        const blockProps = useBlockProps( { className: 'blockStyle' } );
        const {
            commitHash,
        } = attributes;

        function onChangeTextField( newValue ) {
            setAttributes( { commitHash: newValue } );
        }

        return <div { ...blockProps }>
            <InspectorControls key="setting">
                <PanelBody title="GitHub Commit Settings">
                    <div id="gh-commit-widget-controls">
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                Commit Hash
                            </legend>
                            <TextControl
                                value={ commitHash }
                                onChange={ onChangeTextField }
                            />
                        </fieldset>
                    </div>
                </PanelBody>
            </InspectorControls>
            The Commit Hash is { commitHash }</div>;
    },

    save: ( { attributes } ) => {
        const blockProps = useBlockProps.save( { className: 'blockStyle' } );
        const {
            commitHash,
        } = attributes;

        return <div { ...blockProps }>The Commit Hash is { commitHash }</div>;
    },
} );