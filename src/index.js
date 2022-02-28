import { registerBlockType } from '@wordpress/blocks';
import {
        useBlockProps,
        InspectorControls,
} from '@wordpress/block-editor';
import {
        PanelBody, 
        TextControl,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

registerBlockType( 'kokkieh/gh-commit-block', {
    attributes: {
        commitHash: {
            type: 'string',
        },
        commitSha: {
            type: 'string',
        },
        commitUrl: {
            type: 'string',
        },
        authorName: {
            type: 'string',
        },
        authorUrl: {
            type: 'string',
        },
        commitMessage: {
            type: 'string',
        },
    },

    edit: ( { attributes, setAttributes } ) => {
        const blockProps = useBlockProps( { className: 'blockStyles' } );
        const {
            commitHash,
            commitSha,
            commitUrl,
            authorName,
            authorUrl,
            commitMessage,
        } = attributes;

        // Update commitHash value when entered into block settings
        function onChangeTextField( newValue ) {
            setAttributes( { commitHash: newValue } );
            renderCommit(newValue);
        }

        // Function to make API request and render the commit data
        // (only called when the commit hash is updated in block settings)
        function renderCommit(hash) {
            apiFetch( { path: '/kokkieh/commit/' + hash } )
            .then( ( data ) => {
                setAttributes( { commitSha: data.sha } );
                setAttributes( { commitUrl: data.html_url } );
                setAttributes( { authorName: data.commit.author.name } );
                setAttributes( { authorUrl: data.author.html_url } );
                setAttributes( { commitMessage: data.commit.message } );
            } )
            .catch(error => {
                setAttributes( { commitSha: "Please enter a valid commit ID." } );
            } );
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
            <h3>Commit Hash</h3>
            <a href={ commitUrl }>{ commitSha }</a>
            <h3>Commit Author</h3>
            <a href={ authorUrl }>{ authorName }</a>
            <h3>Commit Message</h3>
            { commitMessage }
        </div>;
    },

    save: ( { attributes } ) => {
        const blockProps = useBlockProps.save();
        const {
            commitSha,
            commitUrl,
            authorName,
            authorUrl,
            commitMessage,
        } = attributes;

        return <div { ...blockProps }>
            <h3>Commit Hash</h3>
            <a href={ commitUrl }>{ commitSha }</a>
            <h3>Commit Author</h3>
            <a href={ authorUrl }>{ authorName }</a>
            <h3>Commit Message</h3>
            { commitMessage }
        </div>;
    },
} );